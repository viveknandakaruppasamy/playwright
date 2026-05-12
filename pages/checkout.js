class Checkout {
    constructor(page)
    {
        this.page = page;

        this.u_name = page.locator('#first-name');
        this.lastname = page.locator('#last-name');
        this.zipcode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
    }

    async Data(User,Last,Zip){

        await this.u_name.fill("standard");
        await this.lastname.fill("_user");
        await this.zipcode.fill("1234515");
    }

    async Continue(){

        await this.continueBtn.click();
    }
}

export default Checkout;