import { test } from '../fixtures/baseTest';


test('valid login test', async ({
    loginPage
}) => {

    await loginPage.openPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );
});

// import { test, devices } from '@playwright/test';

// test.use({
//   ...devices['iPhone 13']
// });

// test('mobile view test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
// });