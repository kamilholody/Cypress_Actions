describe('Feedback Test', () => {
    it('should submit feedback form', () => {
        cy.visitFeedbackpage()
    
        cy.fixture("feedbackData").then(({name, email, subject, message}) => {
            cy.submitFeedback(name, email, subject, message)
        })
        cy.asertionFeedback()
    })
})
