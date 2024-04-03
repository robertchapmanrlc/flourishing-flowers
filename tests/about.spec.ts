import { test, expect } from "@playwright/test";

test("About Us Page", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole('main')).toContainText("Get To Know Us At Flourishing Flowers");
  await expect(page.getByRole('main')).toContainText("We believe flowers can be used to make anything special. From lavish weddings that will be remembered for a life time to days you want to give gift just because. All your flower shopping needs can be met here.");
  await expect(page.getByRole("img", { name: "Flowers" })).toBeVisible();
});
