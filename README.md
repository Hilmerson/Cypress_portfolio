# 🟢 Cypress Showcase [![Cypress Version](https://img.shields.io/badge/Cypress-v13.6.3-brightgreen)](https://www.cypress.io/)

Welcome to my Cypress Showcase repository! 🚀 This project features a collection of Cypress tests that showcase various functionalities.
<p align="center">
  <kbd>
<img src="https://cdn.deliciousbrains.com/content/uploads/2018/09/28135025/db-End2EndTestingCypress-1540x748.jpg.webp"></img>
  </kbd>
</p>

This portfolio serves as a place to demonstrate a range of examples of my skills in automated (E2E) testing using Cypress. Through this showcase, I'll provide insights into my capabilities and experiences in leveraging Cypress for comprehensive testing scenarios.

# Table of Contents
- [Basic Test Examples](#basic-test-examples)
- [eCommerce Examples](#ecommerce-examples)

## Basic Test Examples

💻 [Code Here!](https://github.com/Hilmerson/Cypress_portfolio/blob/master/cypress/e2e/basicsShowcase.cy.js)

In these examples, I will utilize the **[Automation Testing Practice Page](https://testautomationpractice.blogspot.com/)**, designed for testing various interactions that a user might engage in within a web application.

✅ **Alert Display**
   - Clicks a button to trigger an alert and asserts that the alert occured.

✅ **Date Picker**
   - Opens a date picker, navigates to the next month, and selects a specific date.

✅ **Country Selection**
   - Selects 'Japan' from a dropdown and verifies the selected value.

✅ **Weekday Checkbox**
- Checks all days of the week checkboxes and asserts they are all checked.

✅ **Form Fill**
 - Fills in a form with sample data.

✅ **Double-click Copy**
   - Performs a double-click action, copies a value, and asserts it is equal to the initial value.

✅ **Drag and Drop**
   - Drags an element onto a dropable area and verifies the text change.

✅ **Slider Interaction**
   - Moves a slider handle to a specific position.

✅ **Div Resize**
   - Resizes a div element and checks that the dimensions have changed.

### 🎬 **Short Video Showcase**

https://github.com/Hilmerson/Cypress_portfolio/assets/103628349/33c45fba-875e-4c4b-88d6-4e7fd15e1980

## eCommerce Examples

Each test suite begins by visiting the eCommerce authentication page, logging in with predefined user credentials, and then performing specific actions related to the tested functionality. The tests use Cypress commands to interact with the webpage elements, such as filling out forms, clicking buttons, and asserting the visibility or content of certain elements.

These tests help ensure the proper functioning of key eCommerce features, covering scenarios like adding items to the cart, processing payments, managing the shopping cart, and handling user authentication.

**In this illustration, I will utilize an [E-commerce page](https://qa-practice.netlify.app/auth_ecommerce.html) that features elements such as a login, adding items to the shopping cart, and placing an order for practice.**

✅ **Login Tests** - 💻 [Code Here!](https://github.com/Hilmerson/Cypress_portfolio/blob/master/cypress/e2e/eCommerce.cy.js)
- Checks whether the default user can successfully fill in the login form with correct credentials and be redirected to the homepage.
- Logs the user out.
- Verifies that attempting to log in with incorrect credentials results in an error message indicating bad credentials and a suggestion to register.

https://github.com/Hilmerson/Cypress_portfolio/assets/103628349/096b6423-1de5-4737-a77d-f8cc88caef07

✅ **Shopping Cart Page Tests** - 💻 [Code Here!](https://github.com/Hilmerson/Cypress_portfolio/blob/master/cypress/e2e/shopping.cy.js)
- Covers the functionality of adding items to the shopping cart, ensuring their visibility, setting quantities for each item, and removing some items from the cart.

https://github.com/Hilmerson/Cypress_portfolio/assets/103628349/566f6ff4-b7c9-421e-ac47-40e9a35685fe

✅ **Payment Page Tests** - 💻 [Code Here!](https://github.com/Hilmerson/Cypress_portfolio/blob/master/cypress/e2e/payment.cy.js)
- Checks whether a user can successfully add items to the cart, proceed to the payment page, and fill out the shipping form.

https://github.com/Hilmerson/Cypress_portfolio/assets/103628349/ddf008ab-767e-452b-bdca-da82cad723c6
