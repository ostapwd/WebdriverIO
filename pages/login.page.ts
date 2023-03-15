import BasePage from "./BasePage";

class LoginPage extends BasePage {

    private usernameInput() { return $("#user-name"); }
    private passwordInput() { return $("#password"); }
    private loginButton() { return $("#login-button"); }

    async login(username: string, password: string) {
        await this.usernameInput().waitForDisplayed({ timeout: 3000, reverse: false });

        await this.usernameInput().setValue(username);
        await this.passwordInput().setValue(password);
        await this.loginButton().click();
    }

    async openApp() {
        await super.open("https://www.saucedemo.com/");
    }
}

export default new LoginPage();
