import { test, expect } from '@playwright/test';

test.use({
    viewport: {width: 375, height: 667}
});

test('UI action demo', async ({page}) =>
{
    //1.navigation
    await page.goto('https://www.saucedemo.com/');

    //2. Get by role locator 
    await page.getByRole('textbox',{name: 'username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');

    //3. keyboard event(Press Enter instead of clicking)
    await page.keyboard.press('Enter');

    //4. waiting for selector
    await page.locator('.inventory_list').waitFor();

    //5.expect url
    await expect(page).toHaveURL(/inventory/);

    //6. Get by text
    await expect(page.getByText('products')).toBeVisible();

    //7.clicking element
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    //8.Page assertion (cart count)
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    //6.Screenshot
    await page.screenshot({ path: 'C:/Users/viveknandha/Downloads/playwright/screenshots/inventory.png'});

    await page.waitForSelector('.inventory_list');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('inventorypage.png', {
    maxDiffPixels: 1000
    });

    // Snapshot (visual testing)
    await expect(page).toHaveScreenshot('inventorypage.png', {
    fullPage: true
    });
})