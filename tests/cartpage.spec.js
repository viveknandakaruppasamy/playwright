import { test } from '../fixtures/baseTest';


test('valid cart page', async ({
   
    loginPage,
    inventoryPage,
    cartPage

}) => {

    await loginPage.openPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );
    
    await inventoryPage.addBackpackToCart();

    await inventoryPage.addBikeLightToCart();

    await inventoryPage.openCart();

    await cartPage.verifyProductsInCart([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light'
    ]);

    await cartPage.clickCheckoutButton();
});

