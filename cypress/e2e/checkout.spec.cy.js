/// <reference types="cypress" />
import { login } from "../support/utils";
import { selectors } from "../support/locators";

let testData;
before(() => {
    cy.fixture('testData').then((data) =>{
        testData = data;
});
});