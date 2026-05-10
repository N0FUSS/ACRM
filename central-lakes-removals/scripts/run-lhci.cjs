/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn, spawnSync } = require("node:child_process");
const fs = require("node:fs");
const net = require("node:net");
const path = require("node:path");
const { chromium } = require("@playwright/test");
const config = require("../lighthouserc.cjs");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "lhci-report");
const chromeProfile = path.join(root, ".lighthouse-chrome-profile");
const chromePort = 9222;
let serverPort = 3137;
let serverUrl = `http://127.0.0.1:${serverPort}`;

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

function waitForPort(port, host = "127.0.0.1", timeoutMs = 120_000) {
  const started = Date.now();

  return new Promise((resolve, reject) => {
    const tryConnect = () => {
      const socket = net.connect(port, host);
      socket.once("connect", () => {
        socket.end();
        resolve();
      });
      socket.once("error", () => {
        socket.destroy();
        if (Date.now() - started > timeoutMs) {
          reject(new Error(`Timed out waiting for ${host}:${port}`));
          return;
        }
        setTimeout(tryConnect, 500);
      });
    };

    tryConnect();
  });
}

function killProcessTree(child) {
  if (!child || !child.pid) {
    return;
  }

  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
      stdio: "ignore",
    });
    return;
  }

  child.kill("SIGTERM");
}

function routeSlug(url) {
  const pathname = new URL(url).pathname;
  return pathname === "/" ? "home" : pathname.replace(/^\/|\/$/g, "").replaceAll("/", "-");
}

function getAssertionLimit(assertions, key, property) {
  const assertion = assertions[key];
  if (!assertion) {
    return undefined;
  }

  return assertion[1]?.[property];
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function medianRun(runs) {
  const medianLcp = median(
    runs.map((lhr) => lhr.audits["largest-contentful-paint"].numericValue)
  );

  return [...runs].sort((a, b) => {
    const aDistance = Math.abs(
      a.audits["largest-contentful-paint"].numericValue - medianLcp
    );
    const bDistance = Math.abs(
      b.audits["largest-contentful-paint"].numericValue - medianLcp
    );
    return aDistance - bDistance;
  })[0];
}

async function main() {
  const lighthouse = (await import("lighthouse")).default;
  const collect = config.ci.collect;
  const assertions = config.ci.assert.assertions;
  const numberOfRuns = Math.max(1, collect.numberOfRuns || 1);
  serverPort = await getFreePort();
  serverUrl = `http://127.0.0.1:${serverPort}`;

  const urls = collect.url.map((configuredUrl) => {
    const url = new URL(configuredUrl);
    return `${serverUrl}${url.pathname}`;
  });
  const failures = [];

  fs.mkdirSync(reportDir, { recursive: true });
  fs.rmSync(chromeProfile, { recursive: true, force: true });
  fs.mkdirSync(chromeProfile, { recursive: true });

  const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
  const server = spawn(npmCmd, ["run", "start", "--", "-p", String(serverPort)], {
    cwd: root,
    stdio: "inherit",
    windowsHide: true,
    shell: process.platform === "win32",
  });

  let chrome;

  try {
    await waitForPort(serverPort);

    chrome = spawn(
      chromium.executablePath(),
      [
        "--headless=new",
        `--remote-debugging-port=${chromePort}`,
        `--user-data-dir=${chromeProfile}`,
        "--no-first-run",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-extensions",
        "about:blank",
      ],
      {
        stdio: "ignore",
        windowsHide: true,
      }
    );

    await waitForPort(chromePort);

    for (const url of urls) {
      const slug = routeSlug(url);
      const runs = [];

      for (let runIndex = 0; runIndex < numberOfRuns; runIndex += 1) {
        const result = await lighthouse(url, {
          port: chromePort,
          output: "json",
          logLevel: "error",
          formFactor: collect.settings.formFactor,
          screenEmulation: collect.settings.screenEmulation,
          throttlingMethod: collect.settings.throttlingMethod,
        });

        runs.push(result.lhr);
        fs.writeFileSync(
          path.join(reportDir, `${slug}-run-${runIndex + 1}.json`),
          JSON.stringify(result.lhr, null, 2)
        );
      }

      const lhr = medianRun(runs);
      fs.writeFileSync(
        path.join(reportDir, `${slug}.json`),
        JSON.stringify(lhr, null, 2)
      );

      const scores = {
        performance: lhr.categories.performance.score,
        accessibility: lhr.categories.accessibility.score,
        "best-practices": lhr.categories["best-practices"].score,
        seo: lhr.categories.seo.score,
      };
      const metrics = {
        "largest-contentful-paint": lhr.audits["largest-contentful-paint"].numericValue,
        "cumulative-layout-shift": lhr.audits["cumulative-layout-shift"].numericValue,
      };

      for (const [category, score] of Object.entries(scores)) {
        const minScore = getAssertionLimit(assertions, `categories:${category}`, "minScore");
        if (minScore !== undefined && score < minScore) {
          failures.push(`${url} ${category} ${score} < ${minScore}`);
        }
      }

      for (const [metric, value] of Object.entries(metrics)) {
        const maxNumericValue = getAssertionLimit(assertions, metric, "maxNumericValue");
        if (maxNumericValue !== undefined && value > maxNumericValue) {
          failures.push(`${url} ${metric} ${Math.round(value)} > ${maxNumericValue}`);
        }
      }

      console.log(
        `${url} runs=${numberOfRuns} performance=${scores.performance.toFixed(2)} accessibility=${scores.accessibility.toFixed(2)} best-practices=${scores["best-practices"].toFixed(2)} seo=${scores.seo.toFixed(2)} LCP=${Math.round(metrics["largest-contentful-paint"])}ms CLS=${metrics["cumulative-layout-shift"].toFixed(3)}`
      );
    }
  } finally {
    killProcessTree(chrome);
    killProcessTree(server);
  }

  if (failures.length > 0) {
    console.error("\nLighthouse budget failures:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
