const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
    specpattern: "cypress/e2e/**/*.spec.js",
    baseUrl: "https://www.saucedemo.com/"
    }
});
