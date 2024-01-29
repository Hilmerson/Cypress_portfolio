// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('shippingForm',(number,street,city,country)=>{
    cy.fixture("payment").then((payment)=>{
        cy.get(payment.phoneNumber).click().type(number);
        cy.get(payment.street).click().type(street);
        cy.get(payment.city).click().type(city);
        cy.get(payment.country).select(country);
        cy.get(payment.submitOrderBtn).click();
        cy.get(payment.successOrderMessage).contains("Congrats!")
    })
})