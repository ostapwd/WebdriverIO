import BasePage from "./BasePage";

export class Personal extends BasePage {
    public constructor() {
        super();
    }
    public firstname() { return $('#first-name'); }
    public lastname() { return $('#last-name'); }
    public zipcode() { return $('#postal-code'); }
    public continue() { return $('#continue') }

    async sendKeysToFirstNameField(text) {
        await (await this.firstname()).addValue(text);
    }
    async sendKeysToLastNameField(text) {
        await (await this.lastname()).addValue(text);
    }
    async sendKeysToZipcodeField(text) {
        await (await this.zipcode()).addValue(text);
    }
    async clickOnContinue() {
        await (await this.continue()).click();
    }
}

export default new Personal();