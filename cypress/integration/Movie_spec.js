describe('Movie', () => {
  beforeEach(() => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        "movies": [
          {
            "id": 694919,
            "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            "title": "Money Plane",
            "average_rating": 6.666666666666667,
            "release_date": "2020-09-29"
          }
        ]
      })
    cy.visit('http://localhost:3000/')
  })
  it('Should display movie poster card', () => {
    cy.get('img').should('have.class', 'movie-poster')
  })
})

//check that movie card is created--should have image element
//check that if you click on the card, it creates instance of MovieInfo
