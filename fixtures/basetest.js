import { test as base } from '@playwright/test';

import LoginPage from '../pages/login';
import Inventorypage from '../pages/inventory';
import CartPage from '../pages/cart';


export const test = base.extend({

    loginPage: async ({page}, use) =>{

        await use(new LoginPage(page));
    },

    inventoryPage: async ({page}, use) => {

        await use(new Inventorypage(page));
    },

    cartPage: async ({page}, use) => {

        await use(new CartPage(page));
    }
});

export { expect } from '@playwright/test';