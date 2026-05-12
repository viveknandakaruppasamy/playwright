class LoginPage {
    constructor(page) //for opening browser or tab
    {
        this.page = page;       

        this.usernameInput =  page.locator('#user-name');
        this.passwordInput =  page.locator('#password');
        this.loginButton =  page.locator('#login-button');
    }

    // goto will open the link 
    async openPage(){   // this will open the page in the browser 
        await this.page.goto('https://www.saucedemo.com/');  //this will wait until the page is created and then it will open the website in that page
    }

    async login(user, pass)
    {
        await this.usernameInput.fill("standard_user");
        await this.passwordInput.fill("secret_sauce");
        await this.loginButton.click();
    }
}

export default LoginPage;

