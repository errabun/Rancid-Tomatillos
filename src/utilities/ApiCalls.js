const fetchAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => {
      if (!response.ok) {
        throw new Error("Couldn't load any movies, please try again!")
      } else {
        return response.json()
      }
    })
}

const fetchMovieId = (event) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${Number(event.target.id)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Couldn't fetch the movie you selected, please try again!")
      } else {
        return response.json()
      }
    })
}

export { fetchAllMovies, fetchMovieId }
