import { test, expect } from "@playwright/test";

test("Footer", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole('contentinfo')).toContainText("Flourishing Flowers");
  await expect(page.getByRole('contentinfo')).toContainText("Home");
  await expect(page.getByRole('contentinfo')).toContainText("Shop");
  await expect(page.getByRole('contentinfo')).toContainText("About Us");
  await expect(page.getByRole("img", { name: "X Icon" })).toBeVisible();
  await expect(page.getByRole("img", { name: "YouTube Icon" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Instagram Icon" })).toBeVisible();
});
