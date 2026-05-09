class Inventorypage {
    constructor(page){
        this.page = page;

        this.backpackbutton = page.locator('#add-to-cart-sauce-labs-backpack');

        this.bikelight = page.locator('#add-to-cart-sauce-labs-bike-light');

        this.cartbutton = page.locator('#shopping_cart_container');
    }
    async addBackpack()
    {
        await this.backpackbutton.click();
    }

    async addBikeLight()
    {
        await this.bikelight.click();
    }

    async clickCartButton()
    {
        await this.cartbutton.click();
    }
}

export default Inventorypage;