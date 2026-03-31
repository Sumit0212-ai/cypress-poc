/// <reference types="cypress" />
import { selectors } from "../support/locators";
import { login } from "../support/utils";

describe('SauceDemo Test',()=> {
let testData;

before(() => {
    cy.fixture('testData').then((data) =>{
        testData = data;
});
});
beforeEach(() => {
cy.visit('/');
});
  
it('login successfully with valid user', ()=>{
    cy.login(testData.users.validUser.username, testData.users.validUser.password);
    cy.url().should('include', '/inventory.html');
});
it('Inavlid user credential', () =>{
    cy.login(testData.users.invalidUser.username, testData.users.invalidUser.password);
    cy.get(selectors.login.errorMsg).should('be.visible')
    .and('contain', 'Username and password do not match any user in this service');
})
});



