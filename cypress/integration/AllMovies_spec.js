//should display a section containing all of the movies passed in as movieData
//should render a loading message when waiting for fetch to complete
//should render an error message when there is an error with fetching data

describe('AllMovies', () => {

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
    .visit('http://localhost:3000/')
  })

  it('Should display a landing image above all movies', () => {
    cy.get('.landing-img').should('be.visible')
  })

  it('Should fetch all the movies from API on page load and display poster of each movie', () => {
    cy.get('.movie-poster').should('be.visible')
  })
} )

describe('Loading', () => {
  it('Should render a loading message when waiting for fetch to complete', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      'movies': []
    })
    .visit('http://localhost:3000/')
    .get('h1').contains('Loading...')
  })
})

describe('AllMovies: Error', () => {
  it('Should show an error message if the browser is unable to fetch any movies', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {})
    .visit('http://localhost:3000/')
    .get('h1').contains("Couldn't load any movies, please try again!")
  })
})
