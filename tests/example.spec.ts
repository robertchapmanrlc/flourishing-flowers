import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "This will be an E-commerece" })
  ).toBeVisible();
});
