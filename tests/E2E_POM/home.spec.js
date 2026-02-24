import {test} from '@playwright/test'
import { LoginSauceDemo } from '../../pages/login_sauce'
import { HomeSauceDemo } from '../../pages/home_sauce';

test.describe('Home - SauceDemo', () => {

    test.beforeEach('Login', async({page}) =>{
        const login = new LoginSauceDemo(page);
        await login.goto();
        await login.loginSauce('standard_user', 'secret_sauce');
        await login.validarRedirecionamento();
    })

    test('Adicionando ao carrinho', async({page}) => {

        const home = new HomeSauceDemo(page);
        await home.addToCart();
        await home.compararProduto('Sauce Labs Backpack', '$29.99');
    })

    test('Logout', async({page}) =>{

        const home = new HomeSauceDemo(page)
        await home.logout();
    })

})