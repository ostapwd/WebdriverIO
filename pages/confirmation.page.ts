import BasePage from "./BasePage";

export class ConfirmationPage extends BasePage {
    public constructor() {
        super();
    }

    public confirmationText() { return $(".//*[contains(text(), 'THANK YOU FOR YOUR ORDER')]"); }

    public lookForConfirmationText() {
        return this.confirmationText();
    }
}

export default new ConfirmationPage();