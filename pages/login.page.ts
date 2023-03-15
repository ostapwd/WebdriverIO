import BasePage from "./BasePage";
import url from "../data/urls";

class LoginPage extends BasePage {

    private usernameInput() { return $("#user-name"); }
    private passwordInput() { return $("#password"); }
    private loginButton() { return $("#login-button"); }

    async waitForPageToBeLoaded() {
        await this.usernameInput().waitForDisplayed({ timeout: 3000, reverse: false });

        return this;
    }

    async login(username: string, password: string) {
        await this.usernameInput().setValue(username);
        await this.passwordInput().setValue(password);
        await this.loginButton().click();
    }

    async openApp() {
        await super.open(url.baseUrl);
    }
}

export default new LoginPage();
