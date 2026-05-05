import { test, expect } from '@playwright/test';

test('playwright basics', async ({page}) => {
    //1. Navigation
    await page.goto('https://www.saucedemo.com');

    //2. Screenshot
    await page.screenshot({ path: 'C:/Users/viveknandha/Downloads/playwright/screenshots/login.png' });


});