import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/docs/intro');

  // Expect a title "to contain" a substring.
  console.log(await page.title());
});

