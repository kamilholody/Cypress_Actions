describe('Feedback Test', () => {
    it('should submit feedback form', () => {
        cy.visitFeedbackpage()
        cy.submitFeedback('Peter', 'test@gmail.com', 'My subject', 'This is my awesome message')
        cy.asertionFeedback()
    })
})
