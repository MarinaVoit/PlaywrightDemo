import { test, expect } from '@playwright/test';

test('test_ui', async ({ page }) => {
    await page.goto('https://devhints.io/xpath');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Xpath cheatsheet');
});

test('get started link', async ({ page }) => {
    await page.goto('https://devhints.io/xpath');

    // Click the get started link.
    await page.getByRole('link', { name: 'DEVHINTS.IO' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Rico\'s cheatsheets' })).toBeVisible();
});