Feature: Responsive View

  #I want to open Game home page in responsive mode
  
  Scenario: Opening a Game page in Responsive
    Given I open game page in responsive
    When I click on Burger Menu
    And I click on Xbox Menu
    And I click on Xbox One Consoles Sub Menu
    And I click on Xbox One X child menu
    # Then I should be on "XBOX ONE X" mobile page
