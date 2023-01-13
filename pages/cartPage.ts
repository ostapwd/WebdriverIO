import BasePage from "./BasePage";

export class CartPage extends BasePage {
    public constructor() {
        super();
    }

    public CheckOutButton() { return $("//*[@id='checkout']"); }
    

}

export default new CartPage();
