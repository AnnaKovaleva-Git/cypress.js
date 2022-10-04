describe('тренировка для формы логина и пароля', () => {
    it('Проверка формы обратной связи', () => {
        cy.visit('https://login.qa.studio/')
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('айлавкуа')
        cy.get('#loginButton').click()
        cy.contains('Нужно исправить проблему валидации')
        cy.get('#exitRestoreButton > .exitIcon')
    })
})