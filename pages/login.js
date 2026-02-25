// Criando uma classe chamada LoginPage
// Classe serve como um "molde" para representar a página de login
export class LoginPage { 

    // O constructor é executado automaticamente quando criamos
    // uma nova instância da classe (new LoginPage(page))
    constructor(page) {

        // Estamos salvando o objeto "page" dentro da classe
        // Isso permite usar this.page em qualquer método da classe
        this.page = page

        // Criando um locator para cada campo 
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });

    }

    // Método assíncrono chamado Login
    // Recebe dois parâmetros: username e password
    async login(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    // Método assíncrono chamado Goto
    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

}