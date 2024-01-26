describe('Multiple showcase tests', () => {
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/');
        // Wait for the cookie alert to show up
        cy.wait(500);
        // Dismiss the cookie alert
        cy.get('#cookieChoiceDismiss').click();
        // Confirm that the cookie alert is no longer present
        cy.get('#cookieChoiceDismiss').should('not.exist');
    });

    it('Should display an alert after clicking the button', () => {
        cy.get('button[onclick="myFunctionAlert()"]').click();
        cy.on('window:alert', () => {
        // Assert that an alert occurred
        });
    });

    it('Date picker', () => {
        cy.get('#datepicker').click();
        cy.get('.ui-datepicker-next > .ui-icon').click();
        cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').click();
    });

    it('Should select Japan from the country dropdown', () => {
        cy.get('select#country').select('Japan');
        cy.wait(1000); // Wait for potential asynchronous actions
        cy.get('select#country').should('have.value', 'japan');
    });

    it('Check Every Day of the Week', () => {
        cy.get('#monday, #tuesday, #wednesday, #thursday, #friday, #saturday, #sunday')
            .check().should('be.checked');
    });

    it('Fill in the form', () => {
        cy.get('#name').type('John Doe');
        cy.get('#email').type('john@example.com');
        cy.get('#phone').type('1234567890');
        cy.get('#textarea').type('123 Main Street');
    });

    it('Check if value is copied after double-click', () => {
        cy.get('#field1').invoke('val').as('initialValue');
        cy.get('button[ondblclick="myFunction1()"]').dblclick();
        cy.get('#field2').invoke('val').as('copiedValue');
        cy.get('@initialValue').then((initialValue) => {
            cy.get('@copiedValue').should('eq', initialValue);
        });
    });

    it('Drag and drop onto droppable area', () => {
        cy.get('#draggable').trigger('mousedown', { which: 1 });
        cy.get('#droppable').trigger('mousemove', { force: true }).trigger('mouseup', { force: true });
        cy.get('#droppable p').should('have.text', 'Dropped!');
    });

    it('Slider', () => {
        cy.get('.ui-slider-handle').invoke('attr', 'style', 'left: 75%;');
    });

    it('Resize the div', () => {
        cy.get('#resizable').invoke('width').as('initialWidth');
        cy.get('#resizable').invoke('height').as('initialHeight');
        cy.get('#resizable').invoke('css', 'width', '300px').invoke('css', 'height', '300px');
        cy.get('#resizable').invoke('width').as('finalWidth');
        cy.get('#resizable').invoke('height').as('finalHeight');
        cy.get('@finalWidth').should('not.eq', '@initialWidth');
        cy.get('@finalHeight').should('not.eq', '@initialHeight');
    });
});
