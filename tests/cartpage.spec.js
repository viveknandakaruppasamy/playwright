import { test, expect } from '../fixtures/basetest';


test('valid cart page', async ({
   
    loginPage,
    inventoryPage,
    cartPage,
    page 

}) => {

    await loginPage.openPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );
    
    await inventoryPage.addBackpack();

    await inventoryPage.addBikeLight();

    await inventoryPage.clickCartButton();

    await cartPage.verifyProduct();

    await cartPage.clickCheckout();
});

