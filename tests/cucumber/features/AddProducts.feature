Feature: Add products to the cart

  Scenario Outline: Verify a user can add products to a cart
    Given Existing user navigates to the app
    When They provide correct credentials
    And They add all products to the cart
    Then All products should be in the cart

  Scenario Outline: Verify a user can buy all of the products added previously
    Given A cart with added products
    When They click on cart logo
    And They click on checkout button
    And They provide valid <firstname> and <lastname> and <zipcode>
    And They complete their purchase by clicking on finish button
    Then All previously added products will be shipped
  Examples:
      | firstname | lastname | zipcode |
      | vasilko   | padenics | 1117    |