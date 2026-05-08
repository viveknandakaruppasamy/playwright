class CartPage
{
    constructor(page)
    {
        this.page = page;


        this.productname = page.locator('.inventory_item_name');

        this.checkoutbutton  = page.locator('#checkout');
    }

    async verifyProduct(){

        await expect(this.productname)
        .toContainText([
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light'
        ]);
    }

    async clickCheckout(){

        await this.checkoutbutton.click();
    }
}