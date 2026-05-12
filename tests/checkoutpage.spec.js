import { test } from '../fixtures/baseTest';

test ('Valid Chekout Page', async ({
        loginPage,
        inventoryPage,
        cartPage,
        checkoutPage,
        page
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

        await checkoutPage.fillCheckoutDetails(
            'John',
            'Doe',
            '600001'
        );

        await checkoutPage.clickContinueButton();
});