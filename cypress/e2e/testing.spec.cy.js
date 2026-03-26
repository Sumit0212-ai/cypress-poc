/// <reference types="cypress" />
describe('SauceDemo Test',()=> {
    it('Valid Login', () =>{

cy.visit('https://www.saucedemo.com/');
cy.get('#user-name').type('standard_user');
cy.get('#password').type('secret_sauce');
cy.get('#login-button').click();
 cy.get('.inventory_item_name')
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
cy.get('[data-test="remove-sauce-labs-backpack"]').click()
});
})