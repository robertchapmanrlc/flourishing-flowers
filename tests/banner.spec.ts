import { test, expect } from "@playwright/test";

test("Make It Magical Banner", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator("h2")).toContainText("Make It Magical");
  await expect(page.locator("h5")).toContainText("Anniversaries can be special with these flowers.");
  await expect(page.getByRole("button", { name: "Shop Now" })).toBeVisible();
});
