import BasePage from "./BasePage";

export class CartPage extends BasePage {
    public constructor() {
        super();
    }

    public checkoutButton() { return $("#checkout")}
    public removeButtons() { return $$(".//button[contains(text(), 'Remove')]")}

    public clickOnCheckoutButton() {
        this.checkoutButton().click();
    }
}

export default new CartPage();