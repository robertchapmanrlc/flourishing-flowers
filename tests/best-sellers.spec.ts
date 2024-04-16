import { test, expect } from "@playwright/test";

test("Best Sellers", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("main")).toContainText("Best Sellers");
  await expect(page.getByRole('link', { name: 'Daisy plus Daisy $' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Rose Bouquet plus Rose' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Rose plus Rose $' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sunflower plus Sunflower $' })).toBeVisible();
  await expect(page.getByRole("button", { name: "Shop all" })).toBeVisible();
});

test("Best Sellers Links", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Daisy plus Daisy $" }).click();
});
