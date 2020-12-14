describe('Trip Create Page', () => {

    // Test product
    let trip = {
        name: 'My New Trip',
        description: 'description.',
        origin: 'Origin',
        destination: 'destination',
        departing_travel: 'departing travel',
        returning_travel: 'returning travel',
        budget: "20.0",
        hotel: "hotel",
    }

    it('adds a new trip', () => {

        // First we have to login, because only auth'd users can add products
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        cy.get('[data-test="add a trip-link"]').click();
        cy.get('[data-test=trip-name-input]').clear().type(trip.name);
        cy.get('[data-test=trip-description-input]').clear().type(trip.description);
        cy.get('[data-test=trip-origin-input]').clear().type(trip.origin);
        cy.get('[data-test=trip-destination-input]').clear().type(trip.destination);
        cy.get('[data-test=trip-departing-travel-input]').clear().type(trip.departing_travel);
        cy.get('[data-test=trip-returning-travel-input]').clear().type(trip.returning_travel);
        cy.get('[data-test=trip-budget-input]').clear().type(trip.budget);
        cy.get('[data-test=trip-hotel-input]').clear().type(trip.hotel);
        cy.get('[data-test=add-trip-button]').click();
        cy.get('[data-test="trip-added-confirmation"]').should('exist');

        // Go to the products page and confirm our new product is visible there
        cy.get('[data-test="trips-link"]').click();
        cy.contains(trip.name);
    });

    /*it('shows error messages if new product data is invalid', () => {

        cy.login();

        cy.get('[data-test="add a product-link"]').click();

        // Try a SKU we know is taken
        cy.get('[data-test=product-sku-input]').clear().type('driscolls-strawberries');
        cy.get('[data-test=add-product-button]').click();
        cy.contains("The sku has already been taken.");
    });*/
})