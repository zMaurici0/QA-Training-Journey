export class CheckoutSauceDemo{

    constructor(page){

        this.page = page

        //checkout step one
        this.checkout_button = page.getByRole('Button', {name: 'checkout'});
        this.first_name_textbox = page.getByPlaceholder('First Name');
        this.last_name_textbox = page.getByPlaceholder('Last Name');
        this.postal_textbox = page.getByPlaceholder('Zip/Postal Code');
        this.continue_button = page.getByRole('button', {name: 'Continue'});

        //checkout step two
        this.item_name_checkout = page.locator('[data-test="inventory-item-name"]').first();
        this.item_price_checkout = page.locator('[data-test="inventory-item-price"]').first();
        this.finish_button = page.getByRole('button', {name: 'Finish'});

        //checkout complete
        this.thankyou_text = page.getByText('Thank you for your order!');
        this.backhome_button = page.getByRole('button', {name: 'Back Home'});
    }

        async checkoutStepOne(first_name, last_name, postal_code){
            await this.checkout_button.click();
            await this.first_name_textbox.fill(first_name);
            await this.last_name_textbox.fill(last_name);
            await this.postal_textbox.fill(postal_code);
            await this.continue_button.click();
        }

        async checkoutStepTwo(){
            await this.finish_button.click();
        }

        async checkoutComplete(){
            await this.backhome_button.click();
        }
}