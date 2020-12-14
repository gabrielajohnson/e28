describe('Trip Create Day', () => {


    // Test product
    let trip = {
        name: 'Paris',
        id: 10
    }
    // Test product
    let tripday = {
        date: '10/20/20',
        description: 'Go to aquarium',
    }

    it('adds a new trip', () => {

        // First we have to login, because only auth'd users can add products
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        cy.visit('/trips/' + trip.id);
        cy.contains('[data-test="trip-name"]', trip.name);

        cy.get('[data-test="trip-add-day"]').click();
        cy.get('[class="calendar"] > div:last-child > div > [data-test="trip-day-date"]').clear().type(tripday.date);
        cy.get('[class="calendar"] > div:last-child > div > [data-test="trip-day-description"]').clear().type(tripday.description);

        cy.get('[class="calendar"] > div:last-child > div > [data-test="trip-day-date"]').should('have.value', tripday.date)

    });

})