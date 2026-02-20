import {test, expect} from '@playwright/test'

// Testando Login em diferentes sites

test('Login válido site 1', async({page}) => {
    await page.goto('https://demo.applitools.com/');
    await page.getByPlaceholder('Enter your username').fill('Mauricio');
    await page.getByPlaceholder('Enter your password').fill('123321');
    await page.getByText('Sign in').click();

    await expect(page).toHaveURL('https://demo.applitools.com/app.html'); //verificando se o login deu certo 
})


test.describe('Testes login - OrangeHTM', () => {

    test('Login válido', async({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); //verificando se o login deu certo 
    })

    test('Login inválido', async ({page}) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill('errado');
        await page.getByPlaceholder('Password').fill('errado');
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByText('Invalid credentials')).toBeVisible(); //verificando se o login deu errado
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //garante que não redirecionou
    });

})

test.describe('Testes login - nopCommerce', () => {

    test('Login válido', async({page}) => {
        await page.goto('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F');
        await page.getByRole('textbox', { name: 'Email:' }).press('Control+a');
        await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
        await page.getByRole('textbox', { name: 'Password:' }).press('Control+a');
        await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
        await page.getByRole('button', { name: 'Log in' }).click();

        await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/admin/'); //verificando se o login deu certo 
    })


    test('Login inválido', async({page}) => {
        await page.goto('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F');
        await page.getByRole('textbox', { name: 'Email:' }).press('Control+a');
        await page.getByRole('textbox', { name: 'Email:' }).fill('erro@gmail.com')
        await page.getByRole('textbox', { name: 'Password:' }).press('Control+a');
        await page.getByRole('textbox', { name: 'Password:' }).fill('erro');
        await page.getByRole('button', { name: 'Log in' }).click();

        await expect(page.getByText('Login was unsuccessful. Please correct the errors and try again.No customer account found')).toBeVisible();
        await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/login?returnurl=%2Fadmin%2F'); //garante que não redirecionou
    })

})
