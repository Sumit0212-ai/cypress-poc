/// <reference types="cypress" />
import { selectors } from "../support/locators";
import { login } from "../support/utils";

describe('SauceDemo Test', () => {
    let testData;

    before(() => {
        cy.fixture('testData').then((data) => {
            testData = data;
        });
    });
    beforeEach(() => {
        cy.visit('/');
    });
//Positive Test
    it('login successfully with valid user', () => {
        login(testData.users.validUser.username, testData.users.validUser.password);
        cy.url().should('include', '/inventory.html');
        cy.get(selectors.inventory.inventoryList).should('be.visible');
    });
    //Invalid Credentials
    it('Inavlid user credential', () => {
        login(testData.users.invalidUser.username, testData.users.invalidUser.password);
        cy.get(selectors.login.errorMsg).should('be.visible')
            .and('contain', 'Username and password do not match any user in this service');
    })
});



