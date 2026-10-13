import { test, expect } from '@playwright/test';

test('Has Text', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/.*inventory/);

  const backpack = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
  await expect(backpack).toBeVisible();

  page.waitForTimeout(3000);
  await backpack.getByRole('button', { name: 'Add to cart' }).click();

  await page.waitForTimeout(3000);
});