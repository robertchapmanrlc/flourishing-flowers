import { test, expect } from '@playwright/test';

test('Product Details', async ({ page }) => {
  await page.goto('/product/daisy');
  await expect(page.getByRole('img', { name: 'Daisy' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Daisy');
  await expect(page.getByRole('main')).toContainText('$3');
  await expect(page.getByLabel('pink')).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('Step into the world of daisies, where simplicity and joy come together in a beautiful symphony of nature. These charming, unpretentious flowers are a true embodiment of purity and cheerfulness, making them a perfect choice for brightening any occasion.');
});