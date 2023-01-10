import { Given, Then, When } from '@cucumber/cucumber';

import loginPage from "../../../pages/login.page";
import inventoryPage from "../../../pages/products.page";
import cartPage from "../../../pages/cart.page";
import checkoutPage from "../../../pages/checkout.page";
import users from "../../../data/users";

Given(/^existing user navigates to the app$/, async () => {
    await loginPage.openApp();
});

Given(/^they provide correct credentials$/, async () => {
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await inventoryPage.waitForSeconds(3);
});

Given(/^they add all products to the cart$/, async () => {
    inventoryPage.addToCartAllProducts();
    await inventoryPage.waitForSeconds(3);
});

// Then(/^all products should be in the cart$/, async () => {
//     let text = await inventoryPage.cartNumberLabel().getText();
//     expect(text).toEqual("6");
// });

Given(/^they navigate to the Cart page$/, async () => {
    await inventoryPage.clickOnCartButton();
});

Given(/^they navigate to the Checkout page$/, async () => {
    await cartPage.clickOnCheckoutButton();
});

When(/^they provide valid user data$/, async () => {
    await checkoutPage.fillInCheckoutUserCredentials();
});

Then(/^they can successfully place the order$/, async () => {
    let text = await checkoutPage.completeHeader.getText();
    expect(text).toEqual("THANK YOU FOR YOUR ORDER");
})