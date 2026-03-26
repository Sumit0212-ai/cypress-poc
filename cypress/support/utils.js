import { selectors } from "./locators";
export const login = (username,password) =>{    
cy.get(selectors.login.username).type(username);
cy.get(selectors.login.password).type(password);
cy.get(selectors.login.loginBtn).click();
};

export const addProductsTocart = (products) =>{
    products.forEach((product) => {
    cy.contains(selectors.cart.cartItem, product)
    closest('.inventory_item')
   .find(selectors.cart.addTocartBtn)
    .click();
  
});
};