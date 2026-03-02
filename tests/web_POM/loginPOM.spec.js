import {test, expect} from '@playwright/test'
import {LoginPage} from '../../pages/login'

test('usando POM', async({page}) => {

    const login = new LoginPage(page)
    await login.goto()
    await login.login('tomsmith', 'SuperSecretPassword!')
})

