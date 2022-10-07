describe('тренировка для формы логина и пароля', () => {
    it('Проверка формы обратной связи', () => {
        cy.visit('https://login.qa.studio/')
        cy.get('#loginButton').click()
        cy.get('#mailForgot').type('annakovaleva94871@gmail.com')
        cy.get('#restoreEmailButton').click()
        cy.contains('Успешно отправили пароль на e-mail')
        cy.get('#exitRestoreButton > .exitIcon')
    })
})