import {test, expect} from '@playwright/test'
import { LoginSauceDemo } from '../../pages/login_sauce'
import { HomeSauceDemo } from '../../pages/home_sauce';

test.describe('Home - SauceDemo', () => {

    test.beforeEach('Login', async({page}) =>{
        const login = new LoginSauceDemo(page);
        await login.goto();
        await login.loginSauce('standard_user', 'secret_sauce');

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test('Adicionando ao carrinho', async({page}) => {

        const home = new HomeSauceDemo(page);
        await home.addToCart();

        await expect(home.badge_cart_icon).toBeVisible();
        await expect(home.badge_cart_icon).toHaveText('1');
        await expect(home.item_name).toHaveText('Sauce Labs Backpack');
        await expect(home.item_price).toHaveText('$29.99');
    })

    test('Logout', async({page}) =>{

        const home = new HomeSauceDemo(page);
        await home.logout();

        await expect(page).toHaveURL('https://www.saucedemo.com/');
    })

})