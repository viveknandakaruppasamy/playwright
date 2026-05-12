import { test, expect } from '../fixtures/basetest';

test ('Valid Chekout Page', async (
    {
        loginPage,
        inventoryPage,
        cartPage,
        checkoutpage,
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

        await checkoutpage.Data();

        await checkoutpage.Continue();
    });