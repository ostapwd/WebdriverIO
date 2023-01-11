import BasePage from "./BasePage";

export class Complete extends BasePage {
    public constructor() {
        super();
    }

    public complete(){return $('.//*[contains(@class,"complete-text")]');}
    
}

export default new Complete();