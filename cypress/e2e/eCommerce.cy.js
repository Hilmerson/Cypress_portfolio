describe('Login with Default User', () => {
    it('Should successfully fill the login form and logout afterwards', () => {
        // Visit the authentication page
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce.html");

        // Fill in the login form with default user credentials
        cy.fixture("index").then((index) => {
            cy.loginForm('admin@admin.com','admin123')
        });

        // Should log-out
        cy.logout()
    });
});

describe('Login without Default User', () => {
    it('Should not allow login with incorrect credentials', () => {
        // Visit the authentication page
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce.html");

        // Attempt to login with non-default user credentials
        cy.fixture("index").then((index) => {
            cy.loginForm('thisIsATest@gmail.com','testing123123')

            // Verify the presence of a message indicating bad credentials
            cy.get(index.badCred).contains("Bad credentials! Please try again! Make sure that you've registered.");
        });
    });
});
