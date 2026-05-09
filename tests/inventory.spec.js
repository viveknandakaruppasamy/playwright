import { test, expect } from '../fixtures/basetest';



test('valid inventory page', async  (
{

    loginPage,
    inventoryPage,
    page
}) => {

    await loginPage.openPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await inventoryPage.addBackpack();

    await inventoryPage.addBikeLight();

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('2');

    await inventoryPage.clickCartButton();


});
