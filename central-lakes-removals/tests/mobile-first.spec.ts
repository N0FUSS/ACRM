import { expect, test } from "@playwright/test";

const routes = ["/", "/services", "/service-areas", "/about", "/reviews", "/contact"];

async function expectNoHorizontalOverflow(page: import("@playwright/test").Page) {
  const overflow = await page.evaluate(() => {
    const root = document.documentElement;
    return {
      scrollWidth: root.scrollWidth,
      clientWidth: root.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
    };
  });

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
  expect(overflow.bodyScrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

async function expectPrimaryControlsUsable(page: import("@playwright/test").Page) {
  const controls = page.locator(
    "a.btn-primary, a.btn-secondary, button, input:not([type='hidden']), select, textarea"
  );
  const count = await controls.count();

  for (let index = 0; index < count; index += 1) {
    const control = controls.nth(index);
    if (!(await control.isVisible())) {
      continue;
    }

    const box = await control.boundingBox();
    if (!box) {
      continue;
    }

    expect(box.width).toBeGreaterThanOrEqual(20);
    expect(box.height).toBeGreaterThanOrEqual(20);
    expect(box.x + box.width).toBeLessThanOrEqual(page.viewportSize()!.width + 1);
  }
}

for (const route of routes) {
  test(`mobile-first layout has no overflow on ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expectNoHorizontalOverflow(page);
    await expectPrimaryControlsUsable(page);
  });
}

test("mobile navigation opens, prioritizes quote action, and closes", async ({ page }) => {
  await page.goto("/");

  const menuControl = page.locator("summary[aria-label='Open menu']");
  if (!(await menuControl.isVisible())) {
    test.skip(true, "Mobile menu is not visible for this viewport");
  }

  await menuControl.click();
  await expect(page.getByRole("link", { name: "Request a Quote" }).first()).toBeVisible();
  const servicesLink = page.getByRole("link", { name: "Services", exact: true });
  await expect(servicesLink).toBeVisible();

  await servicesLink.click();
  await expect(page).toHaveURL(/\/services$/);
});

test("central otago service area is linked from the index and renders", async ({ page }) => {
  await page.goto("/service-areas");

  const centralOtagoLink = page.locator('a[href="/service-areas/central-otago"]').first();
  await expect(centralOtagoLink).toHaveAttribute("href", "/service-areas/central-otago");
  await expect(centralOtagoLink).toContainText("Central Otago");

  const response = await page.goto("/service-areas/central-otago");

  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { name: "Central Otago Movers" })).toBeVisible();
  await expect(page.getByText(/based in Cromwell and provides professional moving services across Central Otago/i)).toBeVisible();
  await expect(page.getByText("Service Area Not Found")).toHaveCount(0);
});

test("reduced motion keeps content visible and usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(/personally led/i);
  await expectNoHorizontalOverflow(page);
});

test("quote form validates and can show the success state", async ({ page }) => {
  await page.route("**/api/quote", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        success: true,
        message: "Thank you! Russell will review your details and be in touch shortly.",
      }),
    });
  });

  await page.goto("/contact");
  await page.waitForLoadState("networkidle");

  const form = page.locator("form");
  await expect(form).toBeVisible();
  await expect(form).not.toHaveJSProperty("noValidate", true);

  await form.getByLabel("Name").fill("Test Customer");
  await form.getByLabel("Phone").fill("021 555 123");
  await form.getByLabel("Email").fill("test@example.com");
  await form.getByLabel("Moving from").fill("Cromwell");
  await form.getByLabel("Moving to").fill("Wanaka");
  await form.getByLabel("Type of move").selectOption("house");

  await expect
    .poll(() => form.evaluate((node) => (node as HTMLFormElement).checkValidity()))
    .toBe(true);

  await Promise.all([
    page.waitForResponse((response) => response.url().includes("/api/quote")),
    form.getByRole("button", { name: "Request a Quote" }).click(),
  ]);

  await expect(page.getByText("Thank you for your enquiry")).toBeVisible();
});
