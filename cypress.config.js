const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "experimentalSessionAndOrigin": true,
  "viewportWidth": 1408,
  "viewportHeight": 995,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
