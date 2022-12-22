import loginPage from "../../pages/login.page";
import productPage from "../../pages/products.page";

describe('Login to the application', () => {

    beforeEach(async () => {
        await loginPage.openApp();
        await loginPage.waitForSeconds(3);
    });

    it('Verify a user can login to the application', async () => {
        await loginPage.login("standard_user", "secret_sauce")
        await loginPage.waitForSeconds(3);

        productPage.productsLabel().then(label => {
            expect(label.text()).toEqual("Products");
        })

    });

});
