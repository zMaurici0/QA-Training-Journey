import { expect } from "@playwright/test";

export class HomeSauceDemo{

    constructor(page){

        //uso no método addToCart
        this.page = page
        this.add_to_cart_button = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.badge_cart_icon = page.locator('[data-test="shopping-cart-badge"]')

        //uso no método compararProduto
        this.cart_icon = page.locator('[data-test="shopping-cart-link"]')
        this.item_name = page.locator('[data-test="inventory-item-name"]').first();
        this.item_price = page.locator('[data-test="inventory-item-price"]').first();

        //uso no método logout
        this.hamburger_menu = page.locator('#react-burger-menu-btn')
        this.logout_button = page.locator('[data-test="logout-sidebar-link"]')
    }

    async addToCart(){
        //adiciona ao carrinho e verifica se a badge apareceu
        await this.add_to_cart_button.click()
        await expect(this.badge_cart_icon).toBeVisible()
        await expect(this.badge_cart_icon).toHaveText('1')
    }

    async compararProduto(name, price){
        //verifica se as informações da tela principal estão iguais ao do carrinho
        await this.cart_icon.click()
        await expect(this.item_name).toHaveText(name)
        await expect(this.item_price).toHaveText(price)
    }

    async logout(){
        //sai da pagina inicial e verifica se foi redirecionado pra pag de login
        await this.hamburger_menu.click()
        await this.logout_button.click()
        await expect(this.page).toHaveURL('https://www.saucedemo.com/')
    }
}