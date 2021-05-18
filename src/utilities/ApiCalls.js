import App from '../components/App/App'

  export const fetchAllMovies = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => {
        App.setState({ movies: data.movies })
      })
      .catch(() => App.setState({ error: "Couldn't load any movies, please try again!" }))
  }

  export const fetchMovieId = (event) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${Number(event.target.id)}`)
      .then(response => response.json())
      .then(data => {
        App.setState({ currentMovie: data.movie })
      })
      .catch(() => App.setState({ error: "Couldn't fetch the movie you selected, please try again!" }))
  }
