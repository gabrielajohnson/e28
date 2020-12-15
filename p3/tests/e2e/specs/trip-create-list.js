describe('Trip Create List', () => {


    let trip = {
        id: 1
    }
    // Test product
    let triplist = {
        name: 'Buying'
    }

    let triplistitem = {
        name: 'toothbrush'
    }

    it('adds a new triplist', () => {

        cy.login();
        cy.visit('/trips/' + trip.id);

        // Enter name for list and add it
        cy.get('[data-test="trip-list-name-input"]').clear().type(triplist.name);
        cy.get('[data-test="trip-add-list"]').click();
        cy.contains('[data-test="trip-list-header"]', triplist.name);
        cy.wait(1000);

        // Add new list item and check if it exists
        cy.get('.trip-lists > .trip-list:last-child > .add-new-item > [data-test="add-new-list-item-input"]').clear().type(triplistitem.name);
        cy.get('.trip-lists > .trip-list:last-child > .add-new-item > [data-test="add-new-list-item"]').click();
        cy.contains('.trip-lists > .trip-list:last-child > ul > li:last-child > [data-test="trip-list-item"]', triplistitem.name);

        cy.visit('/account');
        cy.get('[data-test=logout-button]').click();

    });

})