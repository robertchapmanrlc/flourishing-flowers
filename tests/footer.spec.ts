import { test, expect } from "@playwright/test";

test("Footer", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator("h3")).toContainText("Best Sellers");
  await expect(page.locator("h5")).toContainText("Birthdays");
  await expect(page.locator("h5")).toContainText("Weddings");
  await expect(page.locator("h5")).toContainText("Get Well");
  await expect(page.locator("h5")).toContainText("Housewarming");
  await expect(page.getByRole("button", { name: "Shop all" })).toBeVisible();
});
