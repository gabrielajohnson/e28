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
        cy.login();

        // Enter fields for new trip
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

        // Go to the trips page and confirm our new trip is visible there
        cy.visit('/');
        cy.get('#trips > a:last-child > div').click();
    });

})