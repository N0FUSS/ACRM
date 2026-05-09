import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run start -- -p 3100",
    cwd: __dirname,
    url: "http://127.0.0.1:3100",
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [
    {
      name: "mobile-320",
      use: {
        browserName: "chromium",
        isMobile: true,
        hasTouch: true,
        viewport: { width: 320, height: 568 },
      },
    },
    {
      name: "mobile-360",
      use: {
        browserName: "chromium",
        isMobile: true,
        hasTouch: true,
        viewport: { width: 360, height: 740 },
      },
    },
    {
      name: "tablet",
      use: {
        browserName: "chromium",
        isMobile: true,
        hasTouch: true,
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: "desktop",
      use: {
        browserName: "chromium",
        viewport: { width: 1440, height: 900 },
      },
    },
  ],
});
