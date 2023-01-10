import BasePage from "./BasePage";

export class ProductsPage extends BasePage {
    public constructor() {
        super();
    }

    private products() { return $$(".inventory_item button[id^=add-to-cart]"); }
    public inventoryPageLogoLabel() { return $(".app_logo"); }
    public productsLabel() { return $(".header_secondary_container > .title"); }
    public cartNumberLabel() { return $(".//*[contains(@class, 'shopping_cart_badge')]"); }
    get cartButton() { return $(".shopping_cart_link"); }

    public addToCartAllProducts() {
        this.products().forEach(async i => {
            await i.click();
            await this.waitForSeconds(3);
        });
        return this;
    }

    async clickOnCartButton() {
        await this.cartButton.click();
    }
}

export default new ProductsPage();
