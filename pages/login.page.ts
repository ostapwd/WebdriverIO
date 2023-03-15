import BasePage from "./BasePage";
import url from "../data/urls";

export class LoginPage extends BasePage {

    private usernameInput() { return $("#user-name"); }
    private passwordInput() { return $("#password"); }
    private loginButton() { return $("#login-button"); }

    async waitForPageToBeLoaded() {
        await this.usernameInput().waitForDisplayed({ timeout: 3000, reverse: true });

        return this;
    }

    async login(user) {
        await this.usernameInput().scrollIntoView();
        await this.usernameInput().setValue(user.username);
        await this.passwordInput().setValue(user.password);
        await this.loginButton().click();
    }

    async openApp() {
        await super.open(url.baseUrl);
    }
}

//export default new LoginPage();
