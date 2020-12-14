describe('Trips Page', () => {

    // Define a product we can use throughout our tests
    let trip = {
        name: 'Paris',
        id: 1
    }

    it('shows all the trips', () => {

        cy.visit('/')
        cy.contains('h1', 'Trips')

        // Confirm we see at least 10 products (that's how many product seeds we have)
        cy.get('[data-test="trip-name"]').its('length').should('be.gte', 1)

        // Confirm we see a our test product
        cy.contains('[data-test="trip-name"]', trip.name)

        // Confirm we can click on a product and get to its individual page
        cy.get('[data-test="trip-name"]').contains(trip.name).click();

        // Confirm the test product page loads
        cy.contains('[data-test="trip-name"]', trip.name)
        cy.url().should('include', trip.id)

    })

/*
    it('shows the correct product images', () => {

        cy.visit('/products')

        cy.get('[data-test=product-image-' + product.id + ']')
            .should('have.attr', 'src')
            .should('include', product.id)
    })

})*/