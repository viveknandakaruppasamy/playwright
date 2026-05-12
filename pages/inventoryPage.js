class InventoryPage {
    constructor(page){
        this.page = page;

        this.backpackAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');

        this.bikeLightAddToCartButton = page.locator('#add-to-cart-sauce-labs-bike-light');

        this.cartButton = page.locator('#shopping_cart_container');
    }
    async addBackpackToCart()
    {
        await this.backpackAddToCartButton.click();
    }

    async addBikeLightToCart()
    {
        await this.bikeLightAddToCartButton.click();
    }

    async openCart()
    {
        await this.cartButton.click();
    }
}

export default Inventorypage;