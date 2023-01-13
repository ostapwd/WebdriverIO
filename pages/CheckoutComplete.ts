import BasePage from "./BasePage";

export class CheckoutComplete extends BasePage {
    public constructor() {
        super();
    }
    
    public CompleteLabel() { return $("#header_container > div.header_secondary_container > span"); }
    public BackHomeButton() { return $("#back-to-products"); }

}

export default new CheckoutComplete();
