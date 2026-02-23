import {test, expect} from '@playwright/test'

test.describe('Login - Swag Labs', () => {

    test('login Válido', async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();

        await expect(page).toHaveURL(/inventory/);
    })

})

test.describe('Fluxo de compra - Swag Labs', () => {

    //Login
     test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL(/inventory/);
    })

    test('Add to cart e checkout', async({page}) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        let nome_produto = 'Sauce Labs Backpack'
        let valor_produto = '$29.99'
        let descricao_produto = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
        
        //Verificando se apareceu a badge com o número 1 no carrinho
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeVisible();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

        //indo para a página do carrinho
        await page.locator('[data-test="shopping-cart-link"]').click();

        // Verificando se as informações do produto no carrinho está igual ao da tela principal
        await expect(page).toHaveURL(/cart/);
        await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(nome_produto);
        await expect(page.locator('[data-test="inventory-item-price"]')).toHaveText(valor_produto);
        await expect(page.locator('[data-test="inventory-item-desc"]')).toHaveText(descricao_produto);

        //Indo para o checkout e preenchendo com as informações necessárias
        await page.getByRole('button', {name: 'Checkout'}).click();

        await expect(page).toHaveURL(/checkout-step-one/);

        await page.getByPlaceholder('First Name').fill('Mauricio');
        await page.getByPlaceholder('Last Name').fill('Mota');
        await page.getByPlaceholder('Zip/Postal Code').fill('123123123');

        // indo para a parte final do checkout e verificando novamente se as informações do item estão corretas
        await page.getByRole('button', {name: 'Continue'}).click();

        await expect(page).toHaveURL(/checkout-step-two/);
        await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(nome_produto);
        await expect(page.locator('[data-test="inventory-item-price"]')).toHaveText(valor_produto);
        await expect(page.locator('[data-test="inventory-item-desc"]')).toHaveText(descricao_produto);
        
        await page.getByRole('button', {name: 'Finish'}).click();

        //Finalizando e verificando se a badge do carrinho desapareceu
        await expect(page).toHaveURL(/checkout-complete/);
        await expect(page.getByText('Thank you for your order!')).toBeVisible();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();

        await page.getByRole('button', {name: 'Back Home'}).click();

        await expect(page).toHaveURL(/inventory/);
    })
})
