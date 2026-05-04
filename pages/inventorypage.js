class Inventorypage {
    constructor(page){
        this.page = page;

        this.addToCartBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addBackpackToCart()
    {
        await this.addToCartBackpack.click();
    }

    async goToCart()
    {
        await this.cartIcon.click();
    }
}

export default Inventorypage;