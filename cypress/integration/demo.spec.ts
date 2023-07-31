describe('Demo Test', () => {
    it('should login into an application', () => {
        cy.visitLoginpage()
        cy.login("username", "password")
    })
})