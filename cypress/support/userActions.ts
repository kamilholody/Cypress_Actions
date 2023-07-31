declare namespace Cypress {
    interface Chainable {
        /**
         * @param username - takes username or id
         * @param password - takes user password
         */
        login(username: string, password: string): Chainable<Element>

        /**
         * 
         * @param name - takes name of the message author
         * @param email - takes email (there is no validation on the backend)
         * @param subject - takes subjects of the message
         * @param message - takes messages of the author
         */
        submitFeedback(name: string, email: string, subject: string, message: string): Chainable<Element>

        /**
         * Verify to Feedback page is correct
         */
        asertionFeedback(): Chainable<Element>
    }
}

Cypress.Commands.add("login", (username, password) => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})

Cypress.Commands.add("submitFeedback", (name, emai, subject, message) => {
    cy.get('#name').type(name)
    cy.get('#email').type(emai)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(message)
    cy.contains('Send Message').click()
})

Cypress.Commands.add("asertionFeedback", () => {
    cy.url().should('include', 'sendFeedback.html')
    cy.get('#feedback-title').should('contain', 'Feedback')
    cy.get('.top_offset').contains('Thank you for your comments')
})