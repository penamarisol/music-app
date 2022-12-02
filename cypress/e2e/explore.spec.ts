describe('Explore specs', () => {
  it('visit the explore page', () => {
    cy.visit('/');
    cy.contains('Explore');
  });
});

export {};
