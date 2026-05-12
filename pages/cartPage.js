import { expect } from '@playwright/test';

class CartPage {
    constructor(page){
        this.page = page;


        this.productNames = page.locator('.inventory_item_name');

        this.checkoutButton  = page.locator('#checkout');
    }

    async verifyProductsInCart(productNames){

        await expect(this.productname)
        .toContainText(productNames);
    }

    async clickCheckoutButton(){

        await this.checkoutButton.click();
    }
}
export default CartPage;