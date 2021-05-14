import React, { Component } from 'react'
import AllMovies from '../AllMovies/AllMovies'
import MovieInfo from '../MovieInfo/MovieInfo'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovieID: null,
      currentMovie: null,
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ currentMovieID: Number(event.target.id) })
  }

  returnHome = (event) => {
    event.preventDefault();
    this.setState({ currentMovieID: null })
    this.setState({ currentMovie: null })
  }

  componentDidUpdate() {
    if (this.state.currentMovieID) {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.currentMovieID}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ currentMovie: data.movie })
        })
    }
    <p>when card is clicked, cardID in state is updated
    which triggers componentDidUpdate
    which sends new fetch request to get data by movieID
    which updates state with current movie data
    which triggers a re render to display MovieInfo with fetched data stoared in state

    current issue with return home function--need to set currentMovie to null still</p>
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(() => this.setState({ error: "Shit Broke" }))
  }

  render() {
    return (
      <main>
        <nav className="nav-bar">
          <h1>Rotten Tomatillos</h1>
          <h2>Profile</h2>
        </nav>
        <p>landing img</p>
        {!this.state.movies.length &&
          <h1>Loading...</h1>
        }
        { !this.state.currentMovieID &&
          <AllMovies movieData={this.state.movies} handleClick={this.handleClick}/>
        }
        { this.state.currentMovie &&
          <MovieInfo currentMovieInfo={this.state.currentMovie} returnHome={this.returnHome} />
        }
      </main>
    )
  }
}

export default App
