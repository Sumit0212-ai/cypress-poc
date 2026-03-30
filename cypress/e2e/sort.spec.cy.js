/// <reference types="cypress" />
import { selectors } from "../support/locators";
import { login, sortByLowToHigh, validatePriceSorting } from "../support/utils";

let testData;
describe('Sorting Validation', () => {
    before(() => {
        cy.fixture('testData').then((data) => {
            testData = data;
        });
    });
//cy.wait();
    beforeEach(() => {
        cy.visit('/');
        login(testData.users.validUser.username, testData.users.validUser.password);
    });
    it('should sort products by price low to high', () =>{
        //Apply sorting
        sortByLowToHigh();
        
        //Validate sorting
        validatePriceSorting();
    })
    });