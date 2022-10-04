describe('Автотесты для формы логина и пароля на Staya', () => {
    it('Проверка формы обратной связи', () => {
        cy.visit('https://staya.dog/')
        cy.get('.header-bottom__right--link').click()
        cy.get('.auth-form > form > [type="email"]').type('annakovaleva94871@gmail.com')
        cy.get('.auth-form > form > [type="password"]').type('5449q7550w0258a112z')
        cy.get('.auth-form__submit').click()
        cy.contains('Невозможно войти с предоставленными учетными данными.')
    })
})