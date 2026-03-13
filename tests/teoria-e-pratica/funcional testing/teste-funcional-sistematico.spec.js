import {test, expect} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test.describe('Teste Funcional Sistemático - Login,', () => {

    test('Caso CT01 username válido + senha válida', async({page}) => {

        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })

    test('Caso CT02 username inválido + senha válida ', async({page}) => {

        await page.locator('[data-test="username"]').fill('nomeerrado')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page).toHaveURL('https://www.saucedemo.com')
    })

    test('Caso CT03 username válido + senha inválida', async({page}) => {

        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('senhaerrada')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page).toHaveURL('https://www.saucedemo.com')
    })

    test('Caso CT04 username vazio', async({page}) => {

        await page.locator('[data-test="username"]').fill('')
        await page.locator('[data-test="password"]').fill('senhaerrada')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page).toHaveURL('https://www.saucedemo.com')
    })

    test('Caso CT05 senha vazia vazio', async({page}) => {

        await page.locator('[data-test="username"]').fill('')
        await page.locator('[data-test="password"]').fill('senhaerrada')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page).toHaveURL('https://www.saucedemo.com')
    })

    test('CT06 username com 1 caractere', async({page}) => {

        await page.locator('[data-test="username"]').fill('a')
        await page.locator('[data-test="password"]').fill('senhaerrada')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page).toHaveURL('https://www.saucedemo.com')
    })

    test('CT07 username com muitos caracteres', async({page}) => {

        const nome_grande = 'a'.repeat(100)
        await page.locator('[data-test="username"]').fill(nome_grande)
        await page.locator('[data-test="password"]').fill('senhaerrada')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page).toHaveURL('https://www.saucedemo.com')
    })

    test('CT08 username com caracteres especiais', async({page}) => {

        await page.locator('[data-test="username"]').fill('f*l4n0!@')
        await page.locator('[data-test="password"]').fill('senhaerrada')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page).toHaveURL('https://www.saucedemo.com')
    })

    test('CT09 username com espaço', async({page}) => {

        await page.locator('[data-test="username"]').fill('standard _ user')
        await page.locator('[data-test="password"]').fill('senhaerrada')
        await page.getByRole('button', {name: 'Login'}).click()

        await expect(page.locator('[data-test="error"]')).toBeVisible()
        await expect(page).toHaveURL('https://www.saucedemo.com')
    })
})

