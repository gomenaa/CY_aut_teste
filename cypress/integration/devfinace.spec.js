

describe('DevFinance',() => {
    it('adicionar uma nova transação de entrada ', () => {
        cy.visit('https://maratona-discover-devfinance.netlify.app/#')
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('arroz')
        cy.get('#amount').type('5')
        cy.get('#date').type('2021-11-04')
        cy.contains('button', 'Salvar').click()
        cy.get('[onclick="Transaction.remove(0)"]').click()
    });
});