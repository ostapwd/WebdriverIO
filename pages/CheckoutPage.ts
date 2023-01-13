import BasePage from "./BasePage";

export class CheckoutPage extends BasePage {
    public constructor() {
        super();
    }

    private continueButton() { return $("//*[@id='continue']"); }
    private firstnameInput() { return $("#first-name"); }
    private lastnameInput() { return $("#last-name"); }
    private postalcodeInput() { return $("#postal-code"); }

    async CheckOut() {
        await this.firstnameInput().setValue("firt name");
        await this.lastnameInput().setValue("last name");
        await this.postalcodeInput().setValue("0123");
        await this.waitForSeconds(3);
        await this.continueButton().click();
    }

}

export default new CheckoutPage();