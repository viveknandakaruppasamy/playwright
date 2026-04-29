import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginpage';

test('valid login test', async({ page }) => 
{
    const login = new LoginPage(page);

    await login.openPage();
})