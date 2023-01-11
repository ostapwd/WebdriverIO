Feature: Order products from the webshop

  Scenario: Verify a user can add products to a cart
    Given Existing user navigates to the app
    When They provide correct credentials
    And They add all products to the cart
    Then All products should be in the cart

  Scenario: Verify a user can order products
    Given That the cart has products
    When They click on the cart icon
    And The added products are present in the cart
    And They click on the checkout button
    And They enter correct shipping information
    And All of the products are present at checkout
    And They finish the order
    Then The "THANK YOU FOR YOUR ORDER" confirmation text should appear
