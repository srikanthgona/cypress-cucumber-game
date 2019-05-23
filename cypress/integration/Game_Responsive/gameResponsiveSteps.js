import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.game.co.uk/m/";

Given('I open game page in responsive', () => {
  cy.viewport(400,782);
  cy.visit(url);
  // Cypress.config('userAgent', 'mobile_value');
});

When('I click on Burger Menu',() => { 
  cy
    .get('.hamburger a')    
    .click();
});

When('I click on Xbox Menu',() => { 
    cy
    .get('.hasSubmenu [data-cat-ref="xbox"]', { timeout: 1000 })
    .click();
});

When('I click on Xbox One Consoles Sub Menu',() => { 
  cy
    .get('.hasSubmenu [data-link-ref="xboxConsoles"]', { timeout: 2000 })
    .click();
});

When('I click on Xbox One X child menu',() => { 
  cy
    .get('.linkList.xboxConsoles>:nth-child(1)', { timeout: 2000 })
    .click();
});

Then('I should be on "XBOX ONE X" page',() => { 
  cy.get('h1').contains('Xbox One X');
});
