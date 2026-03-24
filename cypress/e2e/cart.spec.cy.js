/// <reference types="cypress" />
import { login, addProductsTocart } from "../support/utils";
describe('Add product to cart', () => {
 let testData;
 before(() => {
  cy.fixture('testData').then((data) =>{
  testData = data;
});
});
beforeEach(() => {
cy.visit('https://www.saucedemo.com/');
login(testData.users.validUser.username, testData.users.validUser.password);
 });
it ('should add products to cart and validte cart badge',() => {
 addProductsTocart(testData.products);
        
//Validate cart badge count
 cy.get('.shopping_cart_badge').should('contain', testData.products.length);

// Go to cart and validate products
cy.get('.shopping-cart-link').click();
 testData.products.forEach(product =>{
 cy.contains('.cart_item', product).should('be.visible');
 })
 })
});