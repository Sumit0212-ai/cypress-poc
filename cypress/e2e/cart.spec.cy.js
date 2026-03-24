/// <reference types="cypress" />
import { login, addProductsTocart } from "../support/utils";
import { selectors } from "../support/locators";
describe('Add product to cart', () => {
 let testData;
 before(() => {
  cy.fixture('testData').then((data) =>{
  testData = data;
});
});
beforeEach(() => {
cy.visit('/');
login(testData.users.validUser.username, testData.users.validUser.password);
 });
it ('should add products to cart and validte cart badge',() => {
 addProductsTocart(testData.products);
        
//Validate cart badge count
 cy.get(selectors.cart.cartBadge).should('contain', testData.products.length);

// Go to cart 
cy.get(selectors.cart.cartIcon).click();
// validate products
 testData.products.forEach(product =>{
 cy.contains(selectors.cart.cartItem, product).should('be.visible');
 })
 })
});