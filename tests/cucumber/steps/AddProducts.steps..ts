import { Given, Then, When } from '@cucumber/cucumber';

import loginPage from "../../../pages/login.page";
import inventoryPage from "../../../pages/products.page";
import users from "../../../data/users";
import cartPage from "../../../pages/cart.page";
import checkoutPage from "../../../pages/checkout.page";
import overviewPage from "../../../pages/overview.page";
import confirmationPage from "../../../pages/confirmation.page";



Given(/^Existing user navigates to the app$/, async () => {
    await loginPage.openApp();
});
When(/^They provide correct credentials$/, async () => {
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await inventoryPage.waitForSeconds(2);
});
When(/^They add all products to the cart$/, async () => {
    await inventoryPage.addToCartAllProducts();
    await inventoryPage.waitForSeconds(2);
});
Then(/^All products should be in the cart$/, async () => {
    let text = await inventoryPage.cartNumberLabel().getText();
    await expect(text).toEqual("6");
});

Given(/^That the cart has products$/, async () => {
    let text = await inventoryPage.cartNumberLabel().getText();
    await expect(text).toEqual("6");
});
When(/^They click on the cart icon$/, async () => {
    await inventoryPage.clickOnCartIcon();
    await cartPage.waitForSeconds(2);
});
When(/^The added products are present in the cart$/, async () => {
    await expect(cartPage.removeButtons()).toBeElementsArrayOfSize(6);
});
When(/^They click on the checkout button$/, async () => {
    await cartPage.clickOnCheckoutButton();
    await checkoutPage.waitForSeconds(2);
});
When(/^They enter correct shipping information$/, async () => {
    await checkoutPage.enterShippingInformation("Kristof", "Juhasz", "4700");
    await overviewPage.waitForSeconds(2);
});
When(/^All of the products are present at checkout$/, async () => {
    await expect(overviewPage.items()).toBeElementsArrayOfSize(6);
});
When(/^They finish the order$/, async () => {
    await overviewPage.clickOnFinishButton();
    await confirmationPage.waitForSeconds(2);
});
Then(/^The "THANK YOU FOR YOUR ORDER" confirmation text should appear$/, async () => {
    let text = await confirmationPage.lookForConfirmationText();
    await expect(text).toExist();
});
