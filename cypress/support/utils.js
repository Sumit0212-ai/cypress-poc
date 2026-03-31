import { selectors } from "./locators";

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
        


