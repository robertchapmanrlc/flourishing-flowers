import { test, expect } from '@playwright/test';

test('Contains Title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('navigation')).toContainText('Flourishing Flowers');
});

test('Has the navigation links', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("navigation")).toContainText("Home");
  await expect(page.getByRole("navigation")).toContainText("Shop");
  await expect(page.getByRole("navigation")).toContainText("About Us");
})

test('Icons are visibile', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("link", { name: "Magnifying glass" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Shopping Cart Icon" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "User Icon" })).toBeVisible();
});