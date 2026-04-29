import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginpage';

test('valid login test', async({ page }) => //playwright work on more asynchronous elements so async keyword is used
{
    const login = new LoginPage(page);

    await login.openPage();
})