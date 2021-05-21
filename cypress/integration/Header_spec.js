describe('Header', () => {
  it('Should render the page heading', () => {
    cy.visit('http://localhost:3000/')
      .get('h1').should('contain.text', 'Rancid Tomatillos')
  })
})
