import { Given, Then, When } from '@cucumber/cucumber';

import loginPage from "../../../pages/login.page";
import inventoryPage from "../../../pages/products.page";
import users from "../../../data/users";
import cartPage from 'pages/cart.page';
import personal from 'pages/personal.inf.page';
import overview from 'pages/overview.page';
import completePage from 'pages/complete.page';

Given(/^Existing user navigates to the app$/, async () => {
    await loginPage.openApp();
});
When(/^They provide correct credentials$/, async () => {
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await inventoryPage.waitForSeconds(3);
});
When(/^They add all products to the cart$/, async () => {
    await inventoryPage.addToCartAllProducts();
    await inventoryPage.waitForSeconds(3);

});
Then(/^All products should be in the cart$/, async () => {
    let text = await inventoryPage.cartNumberLabel().getText();
    await expect(text).toEqual("6");
});



Given(/^A cart with added products$/, async () => {
    let count = await inventoryPage.cartNumberLabel().getText();
    await expect(count).toEqual("6");
});
When(/^They click on cart logo$/, async () => {
    await inventoryPage.clickOnCartLogo();
    await inventoryPage.waitForSeconds(3);
});
When(/^They click on checkout button$/, async () => {
    await cartPage.clickOnCheckoutBtn();
    await cartPage.waitForSeconds(3);
});
When(/^They provide valid (.*) and (.*) and (.*)$/, async function (firstname, lastname, zipcode) {
    await personal.sendKeysToFirstNameField(firstname)
    await personal.sendKeysToLastNameField(lastname)
    await personal.sendKeysToZipcodeField(zipcode)
    await personal.waitForSeconds(1);
    await personal.clickOnContinue();
    await personal.waitForSeconds(3);
});
When(/^They complete their purchase by clicking on finish button$/, async () => {
    await overview.clickOnFinish();
    await overview.waitForSeconds(1);
});
Then(/^All previously added products will be shipped$/, async () => {
    let text = await completePage.complete().getText();
    await expect(text).toEqual("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    await completePage.waitForSeconds(3);
});
