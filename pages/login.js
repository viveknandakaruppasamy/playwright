class LoginPage {
    constructor(page) //for opening browser or tab
    {
        this.page = page;       

        this.username =  page.locator('#user-name');
        this.password =  page.locator('#password');
        this.loginBtn =  page.locator('#login-button');
    }

    // goto will open the link 
    async openPage(){   // this will open the page in the browser 
        await this.page.goto('https://www.saucedemo.com/');  //this will wait until the page is created and then it will open the website in that page
    }

    async login(user, pass)
    {
        await this.username.fill("standard_user");
        await this.password.fill("secret_sauce");
        await this.loginBtn.click();
    }
}

export default LoginPage;

