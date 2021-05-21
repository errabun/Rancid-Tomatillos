describe('App', () => {

  it('Should display movie with same id that is in the path of URL', () => {
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
      .get('#694919').click()
      .get('button').click()
      .get('#337401').click()
      .get('button').click()
      .go('back')
      .url().should('include', '337401')
      .go('back')
      .url().should('include', '/')
      .go('back')
      .url().should('include', '694919')

  })
})
