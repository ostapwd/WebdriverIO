import BasePage from "./BasePage";

export class OverviewPage extends BasePage {
    public constructor() {
        super();
    }

    public finishButton() { return $("#finish")}
    public items() { return $$(".//*[@class = 'inventory_item_name']")}

    public clickOnFinishButton() {
        this.finishButton().click();
    }
}

export default new OverviewPage();