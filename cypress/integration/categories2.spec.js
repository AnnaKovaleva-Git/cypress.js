describe('Позитивный кейс', () => {
    it('Категории', () => {
        cy.visit('https://edadeal.ru/moskva')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.wait(5000);
        cy.get('.b-header__search-input').type('алкоголь')
        cy.get('.b-header__search-button').click()
        cy.contains('Сортировка:')
    })
})