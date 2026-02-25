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

}