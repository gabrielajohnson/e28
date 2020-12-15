describe('Trips Page', () => {

    // Define a product we can use throughout our tests
    let trip = {
        name: 'Paris',
        id: 1
    }

    it('shows all the trips', () => {

        cy.login();
        cy.visit('/');
        cy.contains('h1', 'Trips');

        cy.contains('[data-test="trip-name"]:first-child', trip.name);

        // We can click on trip and get trip page
        cy.get('[data-test="trip-name"]').contains(trip.name).click();

        // Confirm the trip page loads
        cy.contains('[data-test="trip-name"]', trip.name);
        cy.url().should('include', trip.id);

        // Logout of account
        cy.visit('/account');
        cy.get('[data-test=logout-button]').click();

    })


})