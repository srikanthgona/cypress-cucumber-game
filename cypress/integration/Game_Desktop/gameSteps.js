import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.game.co.uk/";

Given('I open game page', () => {
  cy.server();
  cy.visit(url);
});

When('I hover over XBox',() => { 
  cy
    .get('.dropdown-toggle.topLevel')
    .eq(1)
    .trigger('mouseover');
});

When('I click on XBox One Consoles',() => { 
  // cy
  //   .get('.dropdown.open .dropdown-menu.xbox', { timeout: 1000 })
  //   .children()
  //   .eq(1)
  //   .children()
  //   .first()
  //   .first()
  //   .click();

    cy
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
// // This is the same step that we have in socialNetworks/Facebook/different.js, but you don't have to worry about collisions!
// Then(`I am very happy`, () => {
//   cy.title().should("include", "Google");
// });
