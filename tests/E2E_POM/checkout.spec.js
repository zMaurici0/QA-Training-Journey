import {test} from '@playwright/test'
import { LoginSauceDemo } from '../../pages/login_sauce'
import { HomeSauceDemo } from '../../pages/home_sauce'
import { CheckoutSauceDemo } from '../../pages/checkout_sauce'

test.describe('Checkout - SauceDemo', () => {

    test.beforeEach('Login e Home', async ({page}) => {

        const login = new LoginSauceDemo(page);
        await login.goto();
        await login.loginSauce('standard_user', 'secret_sauce');
        await login.validarRedirecionamento();

        const home = new HomeSauceDemo(page);
        await home.addToCart();
        await home.compararProduto('Sauce Labs Backpack', '$29.99');

    })

    test('Checkout', async ({page}) => {

        const checkout = new CheckoutSauceDemo(page)
        await checkout.checkoutStepOne('Mauricio', 'Mota', '123321');
        await checkout.checkoutStepTwo('Sauce Labs Backpack', '$29.99');
        await checkout.checkoutComplete();
    })

})