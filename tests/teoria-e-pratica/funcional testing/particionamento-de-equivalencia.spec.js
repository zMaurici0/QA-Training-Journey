import {test, expect} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('Caso CT01 username: standard_user, senha: secret_sauce = válido', async({page}) => {
;
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test('Caso CT02 username: errado, senha: secret_sauce = inválido', async({page}) => {

    await page.locator('[data-test="username"]').fill('nomeerrado')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()

    await expect(page.locator('[data-test="error"]')).toBeVisible()
    await expect(page).toHaveURL('https://www.saucedemo.com')
})

test('Caso CT03 username: standard_user, senha: errada = inválido', async({page}) => {

    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('senhaerrada')
    await page.getByRole('button', {name: 'Login'}).click()

    await expect(page.locator('[data-test="error"]')).toBeVisible()
    await expect(page).toHaveURL('https://www.saucedemo.com')
})