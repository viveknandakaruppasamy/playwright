import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginpage';
import Inventorypage from '../pages/inventorypage';

test('valid login test', async({ page }) => //playwright work on more asynchronous elements so async keyword is used
{
    const login = new LoginPage(page);
    const inventory = new Inventorypage(page);

    await login.openPage();
    await login.login('standard_user', 'secret_sauce');

    await inventory.addBackpackToCart();

    await inventory.goToCart();

    await expect(page).toHaveURL(/cart/);
});

// import { test, devices } from '@playwright/test';

// test.use({
//   ...devices['iPhone 13']
// });

// test('mobile view test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
// });