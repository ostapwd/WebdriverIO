import CheckoutComplete from "pages/CheckoutComplete";
import CheckoutPage from "pages/CheckoutPage";
import FinishPage from "pages/FinishPage";
import loginPage from "../../pages/login.page";
import productPage from "../../pages/products.page";
import cartPage, { CartPage } from "pages/cartPage";
import { AfterStep, Before } from "@wdio/cucumber-framework";


describe('Testing: Add all products to cart, then checkout', () => {

    it('Testing login', async () => {
        await loginPage.openApp();
        await loginPage.waitForSeconds(1);
        await loginPage.login("standard_user", "secret_sauce")
        await loginPage.waitForSeconds(1);

        productPage.productsLabel().then( async label => {
            await expect(label.text()).toEqual("Products");
        })
    });

    it('Testing if all product can be added to cart', async () => {
        await productPage.addToCartAllProducts();
        await productPage.waitForSeconds(1);

        productPage.cartNumberLabel().then( async label => {
            await expect(label.text()).toEqual("6");
        })
    });

    it('Testing checking out', async () => {
        await productPage.cartNumberLabel().click();
        await productPage.waitForSeconds(1);

        await cartPage.CheckOutButton().click();
        await cartPage.waitForSeconds(1);

        await CheckoutPage.CheckOut();
        await CheckoutPage.waitForSeconds(1);

        FinishPage.FinishLabel().then( async label => {
            await expect(label.text()).toEqual("Checkout: Overview");
        })
    });

    it('Testing if order can be completed', async () => {
        await FinishPage.FinishButton().click();
        await FinishPage.waitForSeconds(1);

        CheckoutComplete.CompleteLabel().then( async label => {
            await expect(label.text()).toEqual("Checkout: Complete!");
        })
        
        await CheckoutComplete.BackHomeButton().click();
        await CheckoutComplete.waitForSeconds(1);
    });
});
