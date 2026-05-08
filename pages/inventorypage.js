class Inventorypage {
    constructor(page){
        this.page = page;

        this.backpackbutton = page.locator('#add-to-cart-sauce-labs-backpack');

        this.bikelight = page.locator('#add-to-cart-sauce-labs-bike-light');
    }
    async addBackpack()
    {
        await this.backpackbutton.click();
    }

    async addBikeLight()
    {
        await this.bikelight.click();
    }
}

export default Inventorypage;