import Page from "./BasePage";

class LoginPage extends Page {

    private usernameInput() { return $("#user-name"); }
    private passwordInput() { return $("#password"); }
    private loginButton() { return $("#login-button"); }

    async login(username: string, password: string) {
        await (await this.usernameInput()).setValue(username);
        await (await this.passwordInput()).setValue(password);
        await (await this.loginButton()).click();
    }

    async openApp() {
        await super.open("https://www.saucedemo.com/");
    }
}

export default new LoginPage();
