import { test, expect } from '../fixtures/baseTest';



test('valid inventory page', async  ({

    loginPage,
    inventoryPage,
    page
}) => {

    await loginPage.openPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await inventoryPage.addBackpackToCart();

    await inventoryPage.addBikeLightToCart();

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('2');

    await inventoryPage.openCart();


});
