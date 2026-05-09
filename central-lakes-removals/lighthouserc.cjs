module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start -- -p 3000",
      startServerReadyPattern: "Ready",
      url: [
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000/services",
        "http://127.0.0.1:3000/service-areas",
        "http://127.0.0.1:3000/about",
        "http://127.0.0.1:3000/reviews",
        "http://127.0.0.1:3000/contact",
      ],
      numberOfRuns: 3,
      settings: {
        chromeFlags: "--headless=new --disable-gpu --no-sandbox --disable-dev-shm-usage --disable-extensions --user-data-dir=.lighthouse-chrome-profile",
        formFactor: "mobile",
        screenEmulation: {
          mobile: true,
          width: 360,
          height: 740,
          deviceScaleFactor: 3,
          disabled: false,
        },
        throttlingMethod: "simulate",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci-report",
    },
  },
};
