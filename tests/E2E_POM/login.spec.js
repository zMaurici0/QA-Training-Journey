import {test, expect} from '@playwright/test'
import { LoginSauceDemo } from '../../pages/login_sauce'

// Recriando o primeiro E2E q fiz, só que usando POM agora

test.describe('Login - SauceDemo', () => {

    test('login com sucesso', async({page}) => {

        const login = new LoginSauceDemo(page);
        await login.goto();
        await login.loginSauce('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test('login com erro', async({page}) =>{

        const login = new LoginSauceDemo(page);
        await login.goto();
        await login.loginSauce('ERRO', 'ERRO');
        await expect(login.login_error).toBeVisible();
        await expect(page).toHaveURL('https://www.saucedemo.com/'); 
    })

})


