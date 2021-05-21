// describe('MovieInfo', () => {
//   beforeEach(() => {
//     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//       "movies": [
//         {
//           "id": 694919,
//           "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//           "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//           "title": "Money Plane",
//           "average_rating": 6.666666666666667,
//           "release_date": "2020-09-29"
//         }
//       ]
//     })
//     .visit('http://localhost:3000/')
//     .get('.movie-poster').click()
//   })
//   it('Should display the movie title', () => {
//     cy.get('.title').should('have.text', 'Money Plane')
//   })
//   it('Should display the movie average rating to the second decimal place', () => {
//     cy.get('.avg-rating').should('have.text', '6.14')
//   })
//   it('Should display the movie release date', () => {
//     cy.get('.release-date').should('have.text', '2020-09-29')
//   })
//   it('Should display the movie overview', () => {
//     cy.get('.overview').should('include.text', 'A professional thief with $40 million in debt and his family')
//   })
//   it('Should display the movie genres', () => {
//     cy.get('.genres').should('have.length', 1)
//   })
//   it('Should display the movie budget', () => {
//     cy.get('.budget').should('have.text', '0')
//   })
//   it('Should display the movie revenue', () => {
//     cy.get('.revenue').should('have.text', '0')
//   })
//   it('Should display the movie runtime', () => {
//     cy.get('.runtime').should('have.text', '82')
//   })
//   it('Should display the movie tagline', () => {
//     cy.get('.tagline').should('have.text', '')
//   })
//   it('Should display the movie poster image', () => {
//     cy.get('.movie-poster').should('be.visible')
//   })
//   it('Should display the movie backdrop', () => {
//     cy.get('.movie-backdrop').should('be.visible')
//   })
//   it('Should render a return home button', () => {
//     cy.get('.return-home').should('exist')
//   })
//   it('Should take the user back to the home page and display AllMovies when the return home button is clicked', () => {
//     cy.get('.return-home').click()
//       .url().should('include', '/')
//   })
//
// })

describe('Loading', () => {
  it('Should render a loading message when waiting for fetch to complete', () => {
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
    .visit('http://localhost:3000/')
    .get('.movie-poster').click()
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {})
    .get('h1').contains('Loading...')
  })
})

describe('Error', () => {
  it('Should render an error message when there is an error with fetching data for MovieInfo', () => {
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
    .visit('http://localhost:3000/')
    .get('.movie-poster').click()
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      'movie': {}
    })
    .get('h1').contains("Couldn't fetch the movie you selected, please try again!")
  })
})

//unit testing to test state
