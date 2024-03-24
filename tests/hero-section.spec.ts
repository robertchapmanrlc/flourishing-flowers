import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h2')).toContainText('Flowers');
  await expect(page.locator('h5')).toContainText('Discover the most exquisite blooms for nearly every occasion.');
  await expect(page.getByRole('button', { name: 'Shop Now' })).toBeVisible();
});