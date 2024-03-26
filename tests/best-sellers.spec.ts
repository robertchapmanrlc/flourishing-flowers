import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("main")).toContainText("Best Sellers");
  await expect(page.getByRole("main")).toContainText("Birthdays");
  await expect(page.getByRole("main")).toContainText("Weddings");
  await expect(page.getByRole("main")).toContainText("Get Well");
  await expect(page.getByRole("main")).toContainText("Housewarming");
  await expect(page.getByRole("button", { name: "Shop all" })).toBeVisible();
});
