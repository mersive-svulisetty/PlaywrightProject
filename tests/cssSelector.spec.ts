import { test, expect } from '@playwright/test';

test('CSS Selector', async ({ page }) => {
  await page.goto('https://qaplayground.com/demo/github-user-search');

  await page.waitForTimeout(3000);

  await page.locator('input#github-username').fill('octocat');

    await page.waitForTimeout(3000);

    // await page.locator('button[type="submit"]').click();

        await page.getByTestId('search-button').click();

        await page.waitForTimeout(3000);

        await page.getByRole('link', { name: 'Home', exact: true })
.click();

});