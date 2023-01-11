import Page from "./BasePage";

class CheckoutPage extends Page {

    private firstNameInput() { return $("#first-name"); }
    private lastNameInput() { return $("#last-name"); }
    private postalCodeInput() { return $("#postal-code"); }
    private continueButton() { return $("#continue"); }

    async enterShippingInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput().setValue(firstName);
        await this.lastNameInput().setValue(lastName);
        await this.postalCodeInput().setValue(postalCode);
        await this.continueButton().click();
    }
}

export default new CheckoutPage();