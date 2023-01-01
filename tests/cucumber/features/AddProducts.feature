Feature: Add products to the cart 

  # Scenario: Verify a user can add products to a cart
  #   Given existing user navigates to the app
  #   When they provide correct credentials
  #   And they add all products to the cart
  #   Then all products should be in the cart  
    
  Scenario: Verify a user can successfully place an order
    Given existing user navigates to the app
    And they provide correct credentials
    And they add all products to the cart
    And they navigate to the Cart page
    And they navigate to the Checkout page
    When they provide valid user data
    Then they can successfully place the order