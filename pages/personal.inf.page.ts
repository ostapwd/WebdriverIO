import BasePage from "./BasePage";

export class Personal extends BasePage {
    public constructor() {
        super();
    }
    public firstname(){return $('#first-name');}
    public lastname(){return $('#last-name');}
    public zipcode(){return $('#postal-code');}
    public continue(){return $('#continue')}

    async sendKeysToFirstNameField(text){
        await (await this.firstname()).addValue(text);
    }
    public sendKeysToLastNameField(text){
        this.lastname().addValue(text);
    }
    public sendKeysToZipcodeField(text){
        this.zipcode().addValue(text);
    }
    public clickOnContinue(){
        this.continue().click();
    }
}

export default new Personal();