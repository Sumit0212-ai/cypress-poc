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
        login(testData.users.validUser.username, testData.users.validUser.password);
    });
    it ('should complete checkout successfully', () =>{
        addProductsTocart(testData.products);
        proceedToCheckout();
        enterCheckoutDetails(testData.checkout.firstName, testData.checkout.lastName, testData.checkout.postalCode);
      //  Validate overview page
      cy.get(selectors.checkout.overviewPage).should('be.visible')
      completeCheckout();
      valiateCheckoutSuccess();
    });
})
