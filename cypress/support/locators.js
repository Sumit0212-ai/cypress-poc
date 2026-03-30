export const selectors = {
    login: {
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        loginBtn: '[data-test="login-button"]',
        errorMsg: '[data-test="error"]'
    },

    cart: {
        addTocartBtn: '[data-test^="add-to-cart"]',
        cartIcon: '[data-test="shopping-cart-link"]',
        cartBadge: '[data-test="shopping-cart-badge"]',
        cartItem: '[data-test="inventory-item-name"]',
        checkoutBtn: '[data-test="checkout"]'
    },
    checkout: {
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        postalCode: '[data-test="postalCode"]',
        continueBtn: '[data-test="continue"]',
        finishBtn: '[data-test="finish"]',
        overviewPage: '[data-test="title"]',
        successMsg: '[data-test="complete-header"]'
    },
    sort: {
        sortDropdown: '[data-test="product-sort-container"]',
        productPrice: '[data-test="inventory-item-price"]'
    },

    inventory: {
        inventoryList: '[data-test="inventory-list"]'
    }

}