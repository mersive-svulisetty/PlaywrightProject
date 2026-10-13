import { test, expect } from '@playwright/test';

test('XPATH Selector', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.waitForTimeout(3000);

 // await page.locator('//input[@id=\'user-name\']').fill('standard_user');
 await page.locator('id=user-name').fill('standard_user');

  await page.waitForTimeout(3000);

  await page.locator('//input[@name=\'password\']').fill('secret_sauce');

  await page.waitForTimeout(3000);

 // await page.locator('text=Login').click();

 //await page.locator('//input[contains(@class,"btn_action")]').click();

    await page.locator('//form[@aria-label="Login"]/input').click();



});