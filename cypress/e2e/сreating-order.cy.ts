describe('Создание заказа', () => {
    beforeEach(() => {
        cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
        cy.intercept('GET', 'api/auth/user', { fixture: 'token.json'}).as('token');
        cy.intercept('POST', 'api/orders', { fixture: 'orders.json'}).as('orders');

        cy.visit('/');
        cy.wait('@getIngredients');
    });

    it('Добавление ингредиентов', () => {
        cy.get(".src-components-ui-burger-constructor-burger-constructor-module__noBuns").should("have.length", 3);

        cy.get(".src-components-ui-ingredients-category-ingredients-category-module__items").first()
            .find(".src-components-ui-burger-ingredient-burger-ingredient-module__container").first()
            .find("button").click();

        cy.get(".src-components-ui-ingredients-category-ingredients-category-module__items").eq(1)
        .find(".src-components-ui-burger-ingredient-burger-ingredient-module__container").first()
        .find("button").click();

        cy.get(".src-components-ui-burger-constructor-burger-constructor-module__element").should("be.visible");
        cy.get(".src-components-ui-burger-constructor-element-burger-constructor-element-module__element_fullwidth").should("be.visible");

        cy.get(".src-components-ui-burger-constructor-burger-constructor-module__total")
            .find("button").click();

        cy.get(".src-components-ui-modal-modal-module__modal").should("exist");
        cy.get(".src-components-ui-order-details-order-details-module__title ").first()
            .should('have.text', '71808');

        cy.get(".src-components-ui-modal-modal-module__modal")
            .find("button")
            .click();
      
        cy.get(".src-components-ui-modal-modal-module__modal").should("not.exist");
    });
});