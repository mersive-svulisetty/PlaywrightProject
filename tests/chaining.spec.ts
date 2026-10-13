import { test, expect } from '@playwright/test';

test('Chaining with multiple actions', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.waitForTimeout(3000);

  await page.getByLabel('Login').getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
});


test('Locating Strategies', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.waitForTimeout(3000);

  await page.locator('input').first().fill('standard_user');

  await page.waitForTimeout(3000);


  await page.locator('input').nth(1).fill('secret_sauce');

    console.log(await page.locator('input').count());

  await page.waitForTimeout(3000);
});
