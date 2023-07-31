describe('Demo Test', () => {
    it('should login into an application', () => {
        cy.visitLoginpage()

        cy.fixture("loginData").then(({username, password}) => {
            cy.login(username, password)
        })
    })
})