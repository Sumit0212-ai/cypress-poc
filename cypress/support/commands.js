import { selectors } from "./locators";

//Login
Cypress.Commands.add('login', (username,password) => {
       cy.get(selectors.login.username).type(username);
        cy.get(selectors.login.password).type(password);
        cy.get(selectors.login.loginBtn).click();
    });
 // Add products
 Cypress.Commands.add('addProductsTocart', (products) => {
products.forEach((product) => {
        cy.contains(selectors.cart.cartItem, product)
            .closest('.inventory_item')
            .find(selectors.cart.addTocartBtn)
            .click();

    });
 });

 //Chekout flow
 Cypress.Commands.add('proceedToCheckout', () => {
    cy.get(selectors.cart.cartIcon).click();
    cy.get(selectors.cart.checkoutBtn).click();
})
//Checkout details
Cypress.Commands.add('enterCheckoutDetails',(firstName, lastName, zip) => {
    cy.get(selectors.checkout.firstName).type(firstName);
    cy.get(selectors.checkout.lastName).type(lastName);
    cy.get(selectors.checkout.postalCode).type(zip);
    cy.get(selectors.checkout.continueBtn).click();
})
//Complete Checkout
Cypress.Commands.add('completeCheckout', () => {
    cy.get(selectors.checkout.finishBtn).click();
});