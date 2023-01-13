import BasePage from "./BasePage";

export class ProductsPage extends BasePage {
    public constructor() {
        super();
    }

    private products() { return $$(".inventory_item button[id^=add-to-cart]"); }
    public inventoryPageLogoLabel() { return $(".app_logo"); }
    public productsLabel() { return $("#header_container > div.header_secondary_container > span"); }
    public cartNumberLabel() { return $("#shopping_cart_container > a > span"); }

    public checkOut() { return $("//*[@id='checkout']"); }

    public addToCartAllProducts() {
        this.products().forEach(async i => {
            await i.click();
            await this.waitForSeconds(3);
        });
        return this;
    }

}

export default new ProductsPage();
