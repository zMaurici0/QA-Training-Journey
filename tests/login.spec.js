import {test, expect} from '@playwright/test'

// Testando Login em diferentes sites

test.only('Login test 1', async({page}) => {
    await page.goto('https://demo.applitools.com/');
    await page.pause()
    await page.getByPlaceholder('Enter your username').fill('Mauricio')
    await page.getByPlaceholder('Enter your password').fill('123321')

    await page.waitForSelector('text=Sign in', {timeout: 5000});
    await page.getByText('Sign in').click();
    await page.close();
})

test('Login test 2', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'aliaa astal' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.close();
})

test('Login test 3', async({page}) => {
    await page.pause();
    await page.goto('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F');
    await page.getByRole('textbox', { name: 'Email:' }).press('Control+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).press('Control+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.close();
})