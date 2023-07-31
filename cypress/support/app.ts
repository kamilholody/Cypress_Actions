declare namespace Cypress {
    interface Chainable {
        visitHomepage(): Chainable<Element>
        visitLoginpage(): Chainable<Element>
        visitFeedbackpage(): Chainable<Element>
    }
}

Cypress.Commands.add("visitHomepage", () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

Cypress.Commands.add("visitLoginpage", () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add("visitFeedbackpage", () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html')
})