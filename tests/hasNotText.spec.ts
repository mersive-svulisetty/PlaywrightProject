import { test, expect } from '@playwright/test';

test('Has Text', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/.*inventory/);

  const Products = page.locator('.inventory_item').filter({ hasNotText: 'Sauce Labs Backpack' });
  
  const count = await Products.count();
  console.log(`Number of products without 'Sauce Labs Backpack': ${count}`);

  });