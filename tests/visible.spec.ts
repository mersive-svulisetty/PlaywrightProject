import { test, expect } from '@playwright/test';

test('Has Filter', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/.*inventory/);

  const buttons = page.getByRole('button', { name: 'Add to cart' })
  .filter({visible:true});
  

  const count = await buttons.count();
  console.log(`Number of visible 'Add to cart' buttons: ${count}`); 
});
