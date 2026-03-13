import {test, expect} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

test('CT01 username válido + senha válida', async({page}) => {
;
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test('CT02 username inválido + senha válida ', async({page}) => {

    await page.locator('[data-test="username"]').fill('nomeerrado')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()

    await expect(page.locator('[data-test="error"]')).toBeVisible()
    await expect(page).toHaveURL('https://www.saucedemo.com')
})

test('CT03 username inválido + senha válida', async({page}) => {

    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('senhaerrada')
    await page.getByRole('button', {name: 'Login'}).click()

    await expect(page.locator('[data-test="error"]')).toBeVisible()
    await expect(page).toHaveURL('https://www.saucedemo.com')
})