import { test, expect } from "@playwright/test";

test("Make It Magical Banner", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole('main')).toContainText("Make It Magical");
  await expect(page.getByRole('main')).toContainText("Anniversaries can be special with these flowers.");
  await expect(page.locator('div').filter({ hasText: 'Make It MagicalAnniversaries' }).getByRole('button')).toBeVisible();
});
