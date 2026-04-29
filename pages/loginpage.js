class LoginPage {
    constructor(page)
    {
        this.page = page;       
    }

    async openPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }
}

export default LoginPage;