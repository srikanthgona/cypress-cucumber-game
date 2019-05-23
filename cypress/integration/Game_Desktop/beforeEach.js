beforeEach(() => {
  cy.log(
    "This will run before every scenario of Game.feature test feature files"
  );
  cy.on('uncaught:exception', (err) => {
    // expect(err.message).to.include('Ignoring error for now');
    return false;
  });
});
