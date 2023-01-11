import BasePage from "./BasePage";

export class Cart extends BasePage {
    public constructor() {
        super();
    }

    public cartItems(){return $("//*[@class = 'cart_item']")}
    public checkoutBtn(){return $("#checkout")}

    public clickOnCheckoutBtn(){
        this.checkoutBtn().click();
        return this;
    }
    
}

export default new Cart();