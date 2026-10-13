import { expect, test } from "@playwright/test";

// test("Bank Account Test", async ({ page }) => { 
//     await page.goto("https://qaplayground.com/bank/login");
//     await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
//     await page.getByPlaceholder("Password").fill("bank_sauce");
//     await page.getByRole("button", { name: "Sign In" }).click();
//     await expect(page.getByRole("heading", { name: "Welcome back, Alex" })).toBeVisible();
//     await page.getByRole("button", { name: /Switch to (light|dark) mode/ }).click();
//     await page.getByTitle("Feedback").click();
//     await page.waitForTimeout(3000);
// });

// test("QA Playground Test", async({ page }) => {   
//     await page.goto("https://qaplayground.com/demo");
//     await expect(page.getByRole("heading", { name: "QA Demo Apps" })).toBeVisible();
//     await page.getByRole('contentinfo').getByRole('link', { name: 'QA Playground home' })
// .click();
//     await expect(page).toHaveURL("https://qaplayground.com/");
// });


test("QA Playground Test 2", async({ page }) => {
    await page.goto("https://images.google.com/");
    await page.getByAltText("Google Images").highlight();
    await page.waitForTimeout(3000);
});