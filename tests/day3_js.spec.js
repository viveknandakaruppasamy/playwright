import { test, expect } from '@playwright/test';

test.use({
    viewport: { width: 375, height: 667 }
});

test('UI action demo', async ({ page }) => {

    // 1. Navigation
    await page.goto('https://www.saucedemo.com/');

    // 2. Login
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

    // 3. Keyboard event
    await page.keyboard.press('Enter');

    // 4. Wait for page load
    await page.locator('.inventory_list').waitFor();
    await page.waitForLoadState('networkidle');

    // 5. URL assertion
    await expect(page).toHaveURL(/inventory/);

    // 6. Text assertion
    await expect(page.getByText('Products')).toBeVisible();

    // 7. Click element
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // 8. Cart assertion
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 9. Normal screenshot
    await page.screenshot({
        path: 'screenshots/inventory.png',
        fullPage: true
    });

    // 10. Visual snapshot testing
    await expect(page).toHaveScreenshot('inventorypage.png', {
        fullPage: true,
        maxDiffPixels: 1000
    });

});