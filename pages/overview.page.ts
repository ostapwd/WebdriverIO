import BasePage from "./BasePage";

export class Overview extends BasePage {
    public constructor() {
        super();
    }
    public finish(){return $('#finish');}
    public cartList(){return $$('.//*[@class="cart_item"]');}

    public clickOnFinish(){
        this.finish().click();
        return this;
    }
}

export default new Overview();