import {test, expect} from '@playwright/test'
import { LoginSauceDemo } from '../../pages/login_sauce'
import { HomeSauceDemo } from '../../pages/home_sauce'
import { CheckoutSauceDemo } from '../../pages/checkout_sauce'

test.describe('Checkout - SauceDemo', () => {

    test.beforeEach('Login e Home', async ({page}) => {

        const login = new LoginSauceDemo(page);
        await login.goto();
        await login.loginSauce('standard_user', 'secret_sauce');

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

        const home = new HomeSauceDemo(page);
        await home.addToCart();

        await expect(home.badge_cart_icon).toBeVisible();
        await expect(home.badge_cart_icon).toHaveText('1');
        await expect(home.item_name).toHaveText('Sauce Labs Backpack');
        await expect(home.item_price).toHaveText('$29.99');
    })

    test('Checkout', async ({page}) => {

        const checkout = new CheckoutSauceDemo(page)

        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

        await checkout.checkoutStepOne('Mauricio', 'Mota', '123321');

        await expect(checkout.item_name_checkout).toHaveText('Sauce Labs Backpack');
        await expect(checkout.item_price_checkout).toHaveText('$29.99');

        await checkout.checkoutStepTwo();

        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        await expect(checkout.thankyou_text).toBeVisible();

        await checkout.checkoutComplete();
    })

})