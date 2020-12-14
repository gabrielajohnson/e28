describe('Trip Create List', () => {


    let trip = {
        id: 10
    }
    // Test product
    let triplist = {
        name: 'Buying'
    }

    let triplistitem = {
        name: 'toothbrush'
    }

    it('adds a new triplist', () => {

        // First we have to login, because only auth'd users can add products
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        cy.visit('/trips/' + trip.id);

        cy.get('[data-test="trip-list-name-input"]').clear().type(triplist.name);
        cy.get('[data-test="trip-add-list"]').click();
        cy.contains('[data-test="trip-list-header"]', triplist.name);

        cy.get('[data-test="add-new-list-item-input"]').clear().type(triplistitem.name);
        cy.get('[data-test="add-new-list-item"]').click();
        cy.contains('[data-test="trip-list-item"]', triplistitem.name);

    });

})