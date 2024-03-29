import { test, expect } from "@playwright/test";

test("Best Sellers", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("main")).toContainText("Best Sellers");
  await expect(page.getByRole("main")).toContainText("Daisy");
  await expect(page.getByRole("main")).toContainText("$3");
  await expect(page.getByRole("main")).toContainText("Rose Bouquet");
  await expect(page.getByRole("main")).toContainText("$25");
  await expect(page.getByRole("main")).toContainText("Rose");
  await expect(page.getByRole("main")).toContainText("$5");
  await expect(page.getByRole("main")).toContainText("Sunflower");
  await expect(page.getByRole("main")).toContainText("$4");
  await expect(page.getByRole("button", { name: "Shop all" })).toBeVisible();
});
