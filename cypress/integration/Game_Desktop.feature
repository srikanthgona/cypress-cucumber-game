Feature: The Game

  I want to open Game page
  
  Scenario: Opening a Game page
    Given I open game page
    When I hover over XBox
    And I click on XBox One Consoles
    And I click on Xbox One X
    Then I should be on "XBOX ONE X" page
