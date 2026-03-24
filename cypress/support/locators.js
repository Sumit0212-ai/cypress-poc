export const selectors = {
    login: {
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        loginBtn: '[data-test="login-button"]',
        errorMsg: '[data-test="error"]'
    },

    cart: {
        addTocartBtn: 'btn btn_primary btn_small btn_inventory',
        cartIcon: '.shopping-cart-link',
        cartBadge: '.shopping_cart_badge',
        cartItem: 'inventory_item_name'
    }
};