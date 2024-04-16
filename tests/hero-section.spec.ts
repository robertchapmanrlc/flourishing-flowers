import { test, expect } from '@playwright/test';

test('Hero Section Test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('main')).toContainText('Flowers');
  await expect(page.getByRole('main')).toContainText('Discover the most exquisite blooms for nearly every occasion.');
  await expect(page.locator('div').filter({ hasText: 'FlowersDiscover the most' }).getByRole('button')).toBeVisible();
});