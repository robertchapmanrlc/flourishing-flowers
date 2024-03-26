import { test, expect } from "@playwright/test";

test("Footer", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator("h3")).toContainText("Flourishing Flowers");
  await expect(page.locator("h5")).toContainText("Home");
  await expect(page.locator("h5")).toContainText("Shop");
  await expect(page.locator("h5")).toContainText("About Us");
  await expect(page.getByRole("button", { name: "Contact Us" })).toBeVisible();
  await expect(page.getByRole("link", { name: "X Icon" })).toBeVisible();
  await expect(page.getByRole("link", { name: "YouTube Icon" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Instagram Icon" })).toBeVisible();
});
