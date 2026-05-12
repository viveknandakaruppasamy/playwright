import { test as base, expect } from '@playwright/test';

import LoginPage from '../pages/loginPage';
import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';


export const test = base.extend({

    loginPage: async ({page}, use) =>{

        await use(new LoginPage(page));
    },

    inventoryPage: async ({page}, use) => {

        await use(new Inventorypage(page));
    },

    cartPage: async ({page}, use) => {

        await use(new CartPage(page));
    },

    checkoutPage: async ({page}, use) => {

        await use(new CheckoutPage(page));

    }
});

export { expect };