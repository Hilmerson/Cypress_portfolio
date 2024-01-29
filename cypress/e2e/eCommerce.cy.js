describe('Login with default user',()=>{
    it('Should fill login form and redirect to homepage',()=>{
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce.html");
        cy.fixture("index").then((index)=>{
            cy.get(index.emailBox).type("admin@admin.com");
            cy.get(index.passBox).type("admin123");
            cy.get(index.submitBtn).click();
        })
        //cy.loginForm('admin@admin.com','admin123')
    })

});

describe('Login without default user',()=>{
    it('Should not let you login',()=>{
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce.html");
        cy.fixture("index").then((index)=>{
            cy.get(index.emailBox).type("thisIsAtest@admin.com");
            cy.get(index.passBox).type("test123");
            cy.get(index.submitBtn).click();
            cy.get(index.badCred).contains("Bad credentials! Please try again! Make sure that you've registered.")
        })
    })

});