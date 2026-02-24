import { expect } from "@playwright/test";

export class LoginSauceDemo{

    constructor(page){

        this.page = page;
        this.username_textbox = page.getByPlaceholder('Username');
        this.password_textbox = page.getByPlaceholder('Password');
        this.login_button = page.getByRole('button', {name: 'Login'})
        this.login_error = page.locator('[data-test="error"]');
        
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async loginSauce(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    async validarRedirecionamento(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html') //valida se foi redirecionado
    }

    async validarErroLogin(){
        await expect(this.login_error).toBeVisible()// valida se apareceu erro na tela
        await expect(this.page).toHaveURL('https://www.saucedemo.com/'); // e valida se permaneceu na pagina
    }

}