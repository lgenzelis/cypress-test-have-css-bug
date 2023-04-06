/// <reference types="cypress" />
describe('page', () => {
  it('test fails as expected', () => {
    cy.visit('https://example.cypress.io')
    // #00bf88 is the color of the banner, so this should fail
    cy.get('.banner').should('have.css', 'backgroundColor', 'rgb(128, 0, 0)')
  })

  it('test passes incorrectly', () => {
    cy.visit('https://example.cypress.io')
    // Not only does this pass, but it assigns .banner the background color rgb(128, 0, 0)
    cy.get('.banner').should('have.css', { backgroundColor: 'rgb(128, 0, 0)' } )
  })
})
