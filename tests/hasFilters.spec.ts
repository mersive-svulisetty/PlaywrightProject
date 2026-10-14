import { test, expect } from '@playwright/test';

test('Has Filter', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/.*inventory/);

  const backpack = page.locator('.inventory_item').filter({ has:page.getByText('Sauce Labs Backpack') });
  await expect(backpack).toBeVisible();

  page.waitForTimeout(3000);
  await backpack.getByRole('button', { name: 'Add to cart' }).click();

  await page.waitForTimeout(3000);
});

test('Has Not Filter', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/.*inventory/);
   await page.pause();

    const backpack = page.locator('.inventory_item').filter({ has:page.getByText('Sauce Labs Backpack') });
  await expect(backpack).toBeVisible();

  page.waitForTimeout(3000);
  await backpack.getByRole('button', { name: 'Add to cart' }).click();

  const products = page.locator('.inventory_item').filter({ hasNot:page.getByRole('button',
     { name: 'Add to cart' }) });
  await expect(products).toBeVisible();

  await page.waitForTimeout(3000);
    const count = await products.count();
    console.log(`Number of products without 'Add to cart' button': ${count}`);
});