describe('Login with Default User', () => {
    it('Should successfully fill the login form and redirect to the homepage', () => {
        // Visit the authentication page
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce.html");

        // Fill in the login form with default user credentials
        cy.fixture("index").then((index) => {
            cy.get(index.emailBox).type("admin@admin.com");
            cy.get(index.passBox).type("admin123");
            cy.get(index.submitBtn).click();
        });

        // Additional command (commented out) for a custom login command if needed
        // cy.loginForm('admin@admin.com','admin123')
    });
});

describe('Login without Default User', () => {
    it('Should not allow login with incorrect credentials', () => {
        // Visit the authentication page
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce.html");

        // Attempt to login with non-default user credentials
        cy.fixture("index").then((index) => {
            cy.get(index.emailBox).type("thisIsAtest@admin.com");
            cy.get(index.passBox).type("test123");
            cy.get(index.submitBtn).click();

            // Verify the presence of a message indicating bad credentials
            cy.get(index.badCred).contains("Bad credentials! Please try again! Make sure that you've registered.");
        });
    });
});
