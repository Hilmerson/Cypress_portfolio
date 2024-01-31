describe('Shipping Page', () => {
    beforeEach(() => {
        // Visit the authentication page and log in
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce.html");
        cy.fixture("index").then((index) => {
            cy.loginForm('admin@admin.com','admin123')
        });
    });

    it('Should allow the user to proceed to payment', () => {
        // Add an item to the cart and proceed to payment
        cy.fixture("shopping").then((shopping) => {
            cy.get(shopping.addCart1).click();
            cy.get(shopping.payBtn).click();
        });
        // Fill out the shipping form
        cy.shippingForm('75645646864', 'Test street', 'Bratislava', 'Slovakia');
    });

    it('Should accurately charge the user the correct price', () => {
        let initialPrice;
        // Add an item to the cart and get the initial price
        cy.fixture("shopping").then((shopping) => {
            cy.get(shopping.addCart1).click();
            cy.get(shopping.initialPrice).invoke("text").then((price) => {
                initialPrice = price;
                return initialPrice;
            });
            cy.get(shopping.payBtn).click();
        });
        // Fill out the shipping form
        cy.shippingForm('75645646864', 'Test street', 'Bratislava', 'Slovakia');

        // Check if the final price matches the initial price
        cy.fixture("payment").then((payment) => {
            cy.get(payment.finalPrice).invoke('text').then((finalPrice) => {
                expect(finalPrice.trim()).to.equal(initialPrice);
            });
        });
    });
});
