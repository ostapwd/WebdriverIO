import BasePage from "./BasePage";

export class CartPage extends BasePage {
    public constructor() {
        super();
    }
    get checkoutButton() { return $("#checkout"); }

    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();
