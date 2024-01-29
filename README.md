# 🟢 Cypress Showcase

Welcome to my Cypress Showcase repository! This project contains a collection of Cypress tests to demonstrate various functionalities.
<p align="center">
  <kbd>
<img src="https://cdn.deliciousbrains.com/content/uploads/2018/09/28135025/db-End2EndTestingCypress-1540x748.jpg.webp"></img>
  </kbd>
</p>

In this example, I will utilize the **[Automation Testing Practice Page](https://testautomationpractice.blogspot.com/)**, designed for testing various interactions that a user might engage in within a web application.

# Table of Contents
- [Basic Test Examples](#basic-test-examples)
- [eCommerce Examples](#ecommerce-examples)

## Basic Test Examples

✅ Alert Display
   - Clicks a button to trigger an alert and asserts that the alert occured.

✅ Date Picker
   - Opens a date picker, navigates to the next month, and selects a specific date.

✅ Country Selection
   - Selects 'Japan' from a dropdown and verifies the selected value.

✅ Weekday Checkbox
- Checks all days of the week checkboxes and asserts they are all checked.

✅ Form Fill
 - Fills in a form with sample data.

✅ Double-click Copy
   - Performs a double-click action, copies a value, and asserts it is equal to the initial value.

✅ Drag and Drop
   - Drags an element onto a dropable area and verifies the text change.

✅ Slider Interaction
   - Moves a slider handle to a specific position.

✅ Div Resize
   - Resizes a div element and checks that the dimensions have changed.

### 🎬 Short Video Showcase

https://github.com/Hilmerson/Cypress_portfolio/assets/103628349/33c45fba-875e-4c4b-88d6-4e7fd15e1980

## eCommerce Examples

Each test suite begins by visiting the eCommerce authentication page, logging in with predefined user credentials, and then performing specific actions related to the tested functionality. The tests use Cypress commands to interact with the webpage elements, such as filling out forms, clicking buttons, and asserting the visibility or content of certain elements.

These tests help ensure the proper functioning of key eCommerce features, covering scenarios like adding items to the cart, processing payments, managing the shopping cart, and handling user authentication.

✅ Login Tests
- Checks whether the default user can successfully fill in the login form with correct credentials and be redirected to the homepage.
- Verifies that attempting to log in with incorrect credentials results in an error message indicating bad credentials and a suggestion to register.

✅ Shopping Cart Page Tests
- Covers the functionality of adding items to the shopping cart, ensuring their visibility, setting quantities for each item, and removing some items from the cart.

✅ Payment Page Tests
- Checks whether a user can successfully add items to the cart, proceed to the payment page, and fill out the shipping form.
