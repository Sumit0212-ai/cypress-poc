export const login = (username,password) =>{    
cy.get('#user-name').type(username);
cy.get('#password').type(password);
cy.get('#login-button').click();
};

export const addProductsTocart = (products) =>{
<<<<<<< HEAD
    products.forEach(product => {
    cy.get('.inventory_item_name')
    .contains(product)
    .find('button')
    .should('be.visible')
=======
    products.forEach((product) => {
    cy.contains(selectors.cart.cartItem, product)
   .closest('.inventory_item')
   .find(selectors.cart.addTocartBtn)
>>>>>>> 0f8f936c24c2ab3a3e7a4745a34d53b13a1f4ed8
    .click();
  
});
};
// export const proceedToCheckout = () => {
//     cy.get(selectors.cart.cartIcon).click();
//     cy.get(selectors.cart.checkoutBtn).click();
// };

    