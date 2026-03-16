import {test, expect} from '@playwright/test'

test.describe('Teste Funcional - Grafo Causa-Efeito CT01 ao CT04', () =>{

    test.beforeEach('Login e Add to Cart', async({page}) =>{
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await page.locator('[data-test="shopping-cart-link"]').click()
        await page.locator('[data-test="checkout"]').click()
    })


    test('CT01 Todas condições verdadeiras = Checkout concluído', async({page}) => {

        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
        await page.locator('[data-test="firstName"]').fill('Fulano')
        await page.locator('[data-test="lastName"]').fill('Silva')
        await page.locator('[data-test="postalCode"]').fill('123321')
        await page.locator('[data-test="continue"]').click()

        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
        await page.locator('[data-test="finish"]').click()
        await expect(page.getByText('Thank you for your order!')).toBeVisible()
    })

    test('CT02 First Name vazio = Erro', async({page}) => {

        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
        await page.locator('[data-test="firstName"]').fill('')
        await page.locator('[data-test="lastName"]').fill('Silva')
        await page.locator('[data-test="postalCode"]').fill('123321')
        await page.locator('[data-test="continue"]').click()

        await expect(page.getByText('Error: First Name is required')).toBeVisible()
    })

    
    test('CT03 Last Name vazio = Erro', async({page}) => {

        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
        await page.locator('[data-test="firstName"]').fill('Fulano')
        await page.locator('[data-test="lastName"]').fill('')
        await page.locator('[data-test="postalCode"]').fill('123321')
        await page.locator('[data-test="continue"]').click()

        await expect(page.getByText('Error: Last Name is required')).toBeVisible()
    })

    test('CT04 Postal Code vazio = Erro', async({page}) => {

        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
        await page.locator('[data-test="firstName"]').fill('Fulano')
        await page.locator('[data-test="lastName"]').fill('Silva')
        await page.locator('[data-test="postalCode"]').fill('')
        await page.locator('[data-test="continue"]').click()

        await expect(page.getByText('Error: Postal Code is required')).toBeVisible()
    })
})


 test('CT05 Usuário não logado/Acesso negado', async({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('asdad')
    await page.locator('[data-test="password"]').fill('asdasd')
    await page.locator('[data-test="login-button"]').click()

    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
})
