import { test, expect } from "@playwright/test";

test("Shopping Cart Page", async ({ page }) => {
  await page.goto("/shopping-cart");
  await expect(page.getByRole('main')).toContainText('Shopping Cart');
  await expect(page.getByRole('main')).toContainText('No orders in the cart.');
});
