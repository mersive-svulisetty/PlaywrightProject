import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  //await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('button', { name: 'Login' }).click();

});


test('Get By Label', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const fullName = page.getByLabel('Full Name');
  await fullName.scrollIntoViewIfNeeded();
  await fullName.highlight({
    style: 'outline: 2px solid red; background-color: yellow; color: black;',
  });   

  await page.waitForTimeout(3000);

});

test('Login', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.getByText('Welcome,').highlight();
    await page.waitForTimeout(3000); 
    await page.getByRole('textbox', { name: 'UserName' }).fill('test123');
    await page.getByPlaceholder('Password').fill('test123');
    await page.getByRole('button', { name: 'Login' }).click();
});