/// <reference types="cypress" />
import { login } from "../support/utils";

describe('SauceDemo Test',()=> {
let testData;

before(() => {
    cy.fixture('testData').then((data) =>{
        testData = data;
});
});
beforeEach(() => {
cy.visit('https://www.saucedemo.com/');
});
  
it('login successfully with valid user', ()=>{
    login(testData.users.validUser.username, testData.users.validUser.password);
    cy.url().should('include', '/inventory.html');
});
it('Inavlid user credential', () =>{
    login(testData.users.invalidUser.username, testData.users.invalidUser.password);
    cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Username and password do not match any user in this service');
})
});



