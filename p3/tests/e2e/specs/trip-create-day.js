describe('Trip Create Day', () => {


    // Test product
    let trip = {
        name: 'Paris',
        id: 1
    }
    // Test product
    let tripday = {
        date: '10/20/20',
        description: 'Go to aquarium',
    }

    it('adds a new trip day', () => {

        // Login to site to create trip
        cy.visit('/account');
        cy.login();

        cy.visit('/trips/' + trip.id);
        cy.contains('[data-test="trip-name"]', trip.name);

        // Add day
        cy.get('[data-test="trip-add-day"]').click();
        cy.wait(1000);
        // Enter day description
        cy.get('[class="calendar"] > .trip-day:last-child > div > [data-test="trip-day-date"]').clear().type(tripday.date);
        cy.get('[class="calendar"] > .trip-day:last-child > div > [data-test="trip-day-description"]').clear().type(tripday.description);

        cy.get('[class="calendar"] > div:last-child > div > [data-test="trip-day-date"]').should('have.value', tripday.date);
        cy.get('[class="calendar"] > div:last-child > div > [data-test="trip-day-description"]').should('have.value', tripday.description);

        cy.visit('/account');
        cy.get('[data-test=logout-button]').click();

    });

})