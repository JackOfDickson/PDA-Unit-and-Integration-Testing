describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display when number buttons are pressed', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '12');
  })

  it('should be able to chain multiple operators together', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })

  it('should be able to show a negitive number', () => {
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-21999992');


  })

  it('should be able to show a number with an decimals', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10.12345');

  })

  it('should return infinity when devided by zero', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Infinity');
  })
})