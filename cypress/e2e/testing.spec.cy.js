/// <reference types="cypress" />
describe('SauceDemo Test',()=> {
    it('Valid Login', () =>{

cy.visit('https://www.saucedemo.com/');
cy.get('#user-name').type('standard_user');
cy.get('#password').type('secret_sauce');
cy.get('#login-button').click();
 cy.get('.inventory_item_name')
//cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
});
})