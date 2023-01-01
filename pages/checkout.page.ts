import BasePage from "./BasePage";

export class CheckoutPage extends BasePage {
    public constructor() {
        super();    
    }
    get checkoutButton() { return $("#checkout"); }
    get firstNameInputField() { return $("#first-name"); }
    get lastNameInputField() { return $("#last-name"); }
    get zipCodeInputField() { return $("#postal-code"); }
    get continueButton() { return $("#continue"); }
    get finishButton() { return $("#finish"); }
    get completeHeader() { return $(".complete-header"); }

    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
     }
     
    async fillInCheckoutUserCredentials() {
        await this.firstNameInputField.setValue("XYZ");
        await this.lastNameInputField.setValue("ABC");
        await this.zipCodeInputField.setValue("1234");
        await this.continueButton.click();
        await this.finishButton.click();
     }
}

export default new CheckoutPage();