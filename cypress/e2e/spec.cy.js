describe('Reservations Spec', () => {
  beforeEach(() => {
    cy.intercept( 'GET','http://localhost:3001/api/v1/reservations', {
    fixture: 'reservations.json',
    }).as('getReservations')
  })

  it('Should display the title of the page when user first visits', () => {
    cy.visit('http://localhost:3000/');
    cy.wait('@getReservations')
    cy.get('.app-title').contains('Turing Cafe Reservations')
  });

  it('Should display the form when the user first visits', () => {
    cy.visit('http://localhost:3000/');
    cy.wait('@getReservations')
    cy.get('.resy-form').should('be.visible')

    cy.get('.resy-form .input-field[name="name"]').should('exist').and('have.attr', 'placeholder', 'Name')
    cy.get('.resy-form .input-field[name="date"]').should('exist').and('have.attr', 'placeholder', 'Date')
    cy.get('.resy-form .input-field[name="time"]').should('exist').and('have.attr', 'placeholder', 'Time')
    cy.get('.resy-form .input-field[name="number"]').should('exist').and('have.attr', 'placeholder', 'Number of Guests')
    cy.get('.resy-form button').should('exist').and('have.text', 'Make Reservation')
  });

  it('Should display current reservations cards when the user first visits', () => {
    cy.visit('http://localhost:3000/');
    cy.wait('@getReservations')

    cy.fixture('reservations.json').then((reservations) => {
      reservations.forEach((reservation, index) => {
        cy.get('.resy-container .card').eq(index).as('currentCard')
        cy.get('@currentCard').find('.card-title').should('contain', reservation.name)
        cy.get('@currentCard').find('.card-detail p').eq(0).should('contain', reservation.date)
        cy.get('@currentCard').find('.card-detail p').eq(1).should('contain', reservation.time)
        cy.get('@currentCard').find('.card-detail p').eq(2).should('contain', `Number of Guests: ${reservation.number}`)

        cy.get('@currentCard').find('.button').should('contain', 'Cancel')
      })
    })
  }) 

  it('Should update form component state when input fields are changed', () => {
    cy.visit('http://localhost:3000/');
    cy.wait('@getReservations')
    cy.get('.resy-form .input-field[name="name"]').type('Atticus').should('have.value', 'Atticus')
    cy.get('.resy-form .input-field[name="date"]').type('01/5/24').should('have.value', '01/5/24')
    cy.get('.resy-form .input-field[name="time"]').type('10:00').should('have.value', '10:00')
    cy.get('.resy-form .input-field[name="number"]').type('2').should('have.value', '2')
  })

  it('Should add a new reservation when the user clicks the make reservation button', () => {
    cy.visit('http://localhost:3000/');
    cy.wait('@getReservations')
    cy.get('.resy-form .input-field[name="name"]').type('Atticus')
    cy.get('.resy-form .input-field[name="date"]').type('01/5/24')
    cy.get('.resy-form .input-field[name="time"]').type('10:00')
    cy.get('.resy-form .input-field[name="number"]').type('2')
    cy.get('.resy-form button').click()

    cy.get('.resy-container .card').should('have.length', 10)
  })
});