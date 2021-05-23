describe('Search Bar', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      'movies': [
        {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.142857142857143,
        "release_date": "2020-09-29"
        },
        {
        "id": 337401,
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "title": "Mulan",
        "average_rating": 5.2727272727272725,
        "release_date": "2020-09-04"
        },
        {
        "id": 718444,
        "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        "title": "Rogue",
        "average_rating": 7,
        "release_date": "2020-08-20"
        }
      ]
    })
      .visit('http://localhost:3000/')
  })
  it('Should search all movies by title when a movie title is entered into the search field and the submit button is pressed, then render movies with matching titles', () => {
    cy.get('form input[name="query"]').type('Rogue')
      .get('.submit-search').click()
      .get('.movie-poster').should('have.id', '718444')
  })
  it('Should search all movies by title regardless of case', () => {
    cy.get('form input[name="query"]').type('rogue')
      .get('.submit-search').click()
      .get('.movie-poster').should('have.id', '718444')
  })
  it('Should search all movies by partial title entry', () => {
    cy.get('form input[name="query"]').type('ro')
      .get('.submit-search').click()
      .get('.movie-poster').should('have.id', '718444')
  })
  it('Should clear the input field after the submit button is clicked', () => {
    cy.get('form input[name="query"]').type('ro')
      .get('.submit-search').click()
      .get('form input[name="query"]').should('have.value', '')
  })
  it('Should show a message stating there were no matches if a search query does not return any matching movie titles', () => {
    cy.get('form input[name="query"]').type('rolkajsdflakjf')
      .get('.submit-search').click()
      .get('.error-msg').should('contain', 'No movies matched your search!')
  })
})
