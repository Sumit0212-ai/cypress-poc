/// <reference types="cypress" />
import { login, addProductsTocart } from "../support/utils";
import { selectors } from "../support/locators";
describe('Add product to cart', () => {
  let testData;
  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data;
    });
  });
  beforeEach(() => {
    cy.visit('/');
    login(testData.users.validUser.username, testData.users.validUser.password);
  })

  it('should add products to cart and validte cart badge count', () => {
    addProductsTocart(testData.products);
    // Validate products in cart page
    cy.get(selectors.cart.cartIcon).click();

    testData.products.forEach(product => {
      cy.contains(selectors.cart.cartItem, product).should('be.visible');
      cy.get(selectors.cart.cartBadge)
        .should('have.text', testData.products.length.toString());
      cy.get(selectors.cart.cartIcon).click();
      cy.contains(selectors.cart.cartItem, product).should('be.visible');


    })
  });

  // it('should validate cart  badge count update correctly', () => {
  //   addProductsTocart(testData.products);
  //   //Validate cart badge count
  //   cy.get(selectors.cart.cartBadge)
  //     .should('have.text', testData.products.length.toString());
  // });
  // it('should validate selected products in cart page', () => {
  //   addProductsTocart(testData.products);

  //   //Go to cart page
  //   cy.get(selectors.cart.cartIcon).click();

  //   //Validate each selected product
  //   testData.products.forEach(product => {
  //     cy.contains(selectors.cart.cartItem, product).should('be.visible');


    });
//   })
// })
