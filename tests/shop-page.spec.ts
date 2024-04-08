import { test, expect } from '@playwright/test';

test('Shop Page', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) {
    await page.getByRole("button", { name: "Open main menu Menu Icon" }).click();
    await page.locator('[id="headlessui-dialog-panel-\\:r0\\:"]').getByRole('link', { name: 'Shop' }).click();
  } else {
    await page.getByRole('navigation').getByRole('link', { name: 'Shop', exact: true }).click();
  }
  await expect(page.getByRole('main')).toContainText('Search For Flowers');
  await page.getByRole('button', { name: 'Sort' }).click();
  await page.getByRole('menuitem', { name: 'Newest' }).click();
  await expect(page.getByRole('link', { name: 'Daisy plus Daisy $' })).toBeVisible();
  if (!isMobile) {
    await expect(page.getByRole('button', { name: 'Color plus' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Occasion plus' })).toBeVisible();
    await page.getByRole('button', { name: 'Color plus' }).click();
    await expect(page.getByText('ColorRedBlueYellowGreenWhitePink')).toBeVisible();
    await page.getByRole('button', { name: 'Occasion plus' }).click();
    await expect(page.getByText('OccasionBirthdaysWeddingsGet')).toBeVisible();
  } else {
    await expect(page.getByRole("button", { name: "Filter" })).toBeVisible();
    await page.getByRole('button', { name: 'Filter' }).click();
    await expect(page.locator("h2")).toContainText("Filters");
    await expect(page.getByRole('button', { name: 'Color plus' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Occasion plus' })).toBeVisible();
    await page.getByRole('button', { name: 'Color plus' }).click();
    await expect(page.getByText('ColorRedBlueYellowGreenWhitePink')).toBeVisible();
    await page.getByRole('button', { name: 'Occasion plus' }).click();
    await expect(page.getByText('OccasionBirthdaysWeddingsGet')).toBeVisible();
  }
});