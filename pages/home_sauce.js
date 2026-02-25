export class HomeSauceDemo{

    constructor(page){

        this.page = page
        this.add_to_cart_button = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.badge_cart_icon = page.locator('[data-test="shopping-cart-badge"]');
        this.cart_icon = page.locator('[data-test="shopping-cart-link"]');
        this.item_name = page.locator('[data-test="inventory-item-name"]').first();
        this.item_price = page.locator('[data-test="inventory-item-price"]').first();
        this.hamburger_menu = page.locator('#react-burger-menu-btn');
        this.logout_button = page.locator('[data-test="logout-sidebar-link"]');
    }

    async addToCart(){
        await this.add_to_cart_button.click();
        await this.cart_icon.click();
    }

    async logout(){
        await this.hamburger_menu.click();
        await this.logout_button.click();
    }
}