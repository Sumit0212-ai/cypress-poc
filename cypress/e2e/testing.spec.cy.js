/// <reference types="cypress" />
describe('SauceDemo Test', () => {
    it('Valid Login', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
       cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
       cy.get('.products').find('.product').each(($el, index, $list) => {
       })
})
})