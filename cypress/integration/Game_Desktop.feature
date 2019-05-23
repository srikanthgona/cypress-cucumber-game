Feature: Desktop view

  #I want to open Game home page in browser
  
  Scenario: Opening a Game page in Desktop
    Given I open game page in browser
    When I hover over XBox
    And I click on XBox One Consoles
    And I click on Xbox One X
    Then I should be on "XBOX ONE X" page