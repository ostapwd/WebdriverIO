import BasePage from "./BasePage";

export class FinishPage extends BasePage {
    public constructor() {
        super();
    }
    public FinishLabel() { return $("#header_container > div.header_secondary_container > span"); }
    public FinishButton() { return $("//*[@id='finish']"); }
    

}

export default new FinishPage();
