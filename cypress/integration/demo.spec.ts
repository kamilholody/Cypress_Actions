describe('Demo Test', () => {
    it('should visit a website', () => {
        cy.visitLoginpage()
        cy.visitHomepage()
    })
})