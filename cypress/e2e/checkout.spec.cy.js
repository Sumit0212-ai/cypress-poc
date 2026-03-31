/// <reference types="cypress" />
import { selectors } from "../support/locators";
import { login, addProductsTocart, proceedToCheckout, enterCheckoutDetails, completeCheckout, valiateCheckoutSuccess } from "../support/utils";

let testData;
describe('Checkout flow', () => {
    before(() => {
        cy.fixture('testData').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        cy.visit('/');
        cy.login(testData.users.validUser.username, testData.users.validUser.password);
    });
    it('should complete checkout successfully', () => {
        cy.addProductsTocart(testData.products);
        cy.proceedToCheckout();
         cy.wait(5000)
        cy.enterCheckoutDetails(testData.checkout.firstName, testData.checkout.lastName, testData.checkout.postalCode);
         cy.wait(5000)
        //  Validate overview page
        cy.get(selectors.checkout.overviewPage).should('be.visible')
         cy.wait(5000)
        cy.completeCheckout();
        valiateCheckoutSuccess();
    });
})
