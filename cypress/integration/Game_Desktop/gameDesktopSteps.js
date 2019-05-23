import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.game.co.uk/";

Given('I open game page in browser', () => {
  // cy.server();
  cy.visit(url);
});

When('I hover over XBox',() => { 
  cy
    // .get('.dropdown-toggle.topLevel')
    .contains('XBOX')
    //.eq(1)
    .trigger('mouseover');
});

When('I click on XBox One Consoles',() => { 
    cy
    // .contains('Xbox One Consoles')
    .get('.dropdown.open>.dropdown-menu.xbox>:nth-child(2)>:nth-child(1)>a', { timeout: 1000 })    
    .click();
});

When('I click on Xbox One X',() => { 
  cy
    .get('[data-franchiseiteration="Xbox One X"]')
    .first()
    .click();
});

Then('I should be on "XBOX ONE X" page',() => { 
  cy.get('h1').contains('Xbox One X');
});
