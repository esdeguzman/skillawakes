describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
    cy.get('div.loading-screen').should('exist')
  })
})