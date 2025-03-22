describe('Бургер Конструктор', () => {
  beforeEach(() => {
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
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
  });

    it('Открытие модального окна и закрытие на кнопку', () => {
    cy.get(".src-components-ui-ingredients-category-ingredients-category-module__items").first()
    .find(".src-components-ui-burger-ingredient-burger-ingredient-module__container").first()
    .click();
    
    cy.get(".src-components-ui-modal-modal-module__modal").should("exist");

    cy.get(".src-components-ui-modal-modal-module__modal")
      .find("button")
      .click();
      
    cy.get(".src-components-ui-modal-modal-module__modal").should("not.exist");
    });


  it('Открытие модального окна и закрытие на оверлэй', () => {
    cy.get(".src-components-ui-ingredients-category-ingredients-category-module__items").first()
    .find(".src-components-ui-burger-ingredient-burger-ingredient-module__container").first()
    .click();
    
    cy.get(".src-components-ui-modal-modal-module__modal").should("exist");

    cy.get(".src-components-ui-modal-overlay-modal-overlay-module__overlay")
      .click({force: true})
      
    cy.get(".src-components-ui-modal-modal-module__modal").should("not.exist");
  });
});