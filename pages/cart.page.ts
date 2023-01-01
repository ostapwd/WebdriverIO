import BasePage from "./BasePage";

export class CartPage extends BasePage {
    public constructor() {
        super();    
    }
    get cartButton() { return $(".shopping_cart_link"); }

    async clickOnCartButton() {
        await this.cartButton.click();
     }
}

export default new CartPage();
