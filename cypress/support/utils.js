export const login = (username,password) =>{    
cy.get('#user-name').type(username);
cy.get('#password').type(password);
cy.get('#login-button').click();
};

export const addProductsTocart = (products) =>{
    products.forEach(product => {
    cy.get('.inventory_item_name')
    .contains(product)
    .find('button')
    .should('be.visible')
    .click();
});
};


    