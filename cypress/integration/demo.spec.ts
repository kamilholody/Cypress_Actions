describe('Demo Test', () => {
    it('should login into an application', () => {
        cy.visitLoginpage()
        cy.waitForSeconds(5)

        cy.fixture("loginData").then(({username, password}) => {
            cy.login(username, password)
        })
    })
})