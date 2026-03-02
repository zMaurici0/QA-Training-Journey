import {test} from "@playwright/test"

test('Selectors Demo', async({page}) => {

    //Usando qualquer propriedade de objeto
    await page.goto("https://www.saucedemo.com/");
    await page.pause() //abre o playwright inspector
    await page.locator('id=user-name').fill('standard_user')

    //Usando Text
    await page.locator('text=LOGIN').click() // ou
    await page.locator('input:has-text("LOGIN")').click()

    //Usando XPath

    await page.locator('xpath=//input[@id ="user-name"]').fill('visual_user')
    await page.locator('//input[@name ="password"]').fill('secret_sauce')

    //Usando CSS Selector
    await page.locator('#login-button').click()


})