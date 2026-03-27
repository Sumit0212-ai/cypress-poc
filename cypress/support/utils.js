import { selectors } from "./locators";
export const login = (username, password) => {
    cy.get(selectors.login.username).type(username);
    cy.get(selectors.login.password).type(password);
    cy.get(selectors.login.loginBtn).click();
};

export const addProductsTocart = (products) => {
    products.forEach((product) => {
        cy.contains(selectors.cart.cartItem, product)
            .closest('.inventory_item')
            .find(selectors.cart.addTocartBtn)
            .click();

    });
};
// Checkout function
export const proceedToCheckout = () => {
    cy.get(selectors.cart.cartIcon).click();
    cy.get(selectors.cart.checkoutBtn).click();
}
export const enterCheckoutDetails = (firstName, lastName, zip) => {
    cy.get(selectors.checkout.firstName).type(firstName);
    cy.get(selectors.checkout.lastName).type(lastName);
    cy.get(selectors.checkout.postalCode).type(zip);
    cy.get(selectors.checkout.continueBtn).click();

};
export const completeCheckout = () => {
    cy.get(selectors.checkout.finishBtn).click();
};
export const valiateCheckoutSuccess = () => {
    cy.get(selectors.checkout.overviewPage).should('exist');
    cy.get(selectors.checkout.successMsg)
        .should('contain.text', 'Thank you for your order!');
}
        //sort by low to high
        export const sortByLowToHigh = () => { 
            cy.get(selectors.sort.sortDropdown).select('lohi');
        };
        //Validate price sorting
        export const validatePriceSorting = () => {
            const prices = [];
            cy.get(selectors.sort.productPrice)
            .each(($el) => {
                const priceText = $el.text().replace('$', '');
                prices.push(parseFloat(priceText));
            })
            .then(() => {
                const sortedPrices = [...prices].sort((a, b) => a-b);
                expect(prices).to.deep.equal(sortedPrices);
            });
        };


