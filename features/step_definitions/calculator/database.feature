Feature: Database
  As a user, I want to use a calculator to perform basic arithmetic operations

  Scenario: Add two numbers
    Given I have entered 50 into the calculator
    And I have entered 70 into the calculator
    When I press add
    Then the result should be 120 on the screen

  Scenario: Subtract two numbers
    Given I have entered 50 into the calculator
    And I have entered 30 into the calculator
    When I press subtract
    Then the result should be 20 on the screen
