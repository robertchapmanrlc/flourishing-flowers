import { test, expect } from "@playwright/test";

test("Shop by Occasion section", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("main")).toContainText("Shop by Occasion");
  await expect(page.getByRole("main")).toContainText("Birthdays");
  await expect(page.getByRole("main")).toContainText("Weddings");
  await expect(page.getByRole("main")).toContainText("Get Well");
  await expect(page.getByRole("main")).toContainText("Housewarming");
  await expect(page.getByRole("button", { name: "Browse all occasions" })).toBeVisible();
});
