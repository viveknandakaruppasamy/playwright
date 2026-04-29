class LoginPage {
    constructor(page) //for opening browser or tab
    {
        this.page = page;       
    }

    // goto will open the link 
    async openPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }
}

export default LoginPage;