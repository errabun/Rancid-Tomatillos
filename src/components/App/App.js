import React, { Component } from 'react'
import AllMovies from '../AllMovies/AllMovies'
import MovieInfo from '../MovieInfo/MovieInfo'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null
    }
  }

  handleClick = (event) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${Number(event.target.id)}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ currentMovie: data.movie })
      })
      .catch(() => this.setState({ error: "Couldn't fetch the movie you selected, please try again!" }))
  }

  returnHome = (event) => {
    this.setState({ currentMovie: null })
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch(() => this.setState({ error: "Couldn't load any movies, please try again!" }))
  }

  render() {
    return (
      <main>
        <nav className="nav-bar">
          <h1>Rotten Tomatillos</h1>
          <h2>Profile</h2>
        </nav>
        <p>landing img</p>
        { this.state.error &&
          <h1>{this.state.error}</h1>
        }
        {!this.state.movies.length &&
          !this.state.error &&
          <h1>Loading...</h1>
        }
        {!this.state.currentMovie &&
          <AllMovies movieData={this.state.movies} handleClick={this.handleClick}/>
        }
        {this.state.currentMovie &&
          <MovieInfo currentMovieInfo={this.state.currentMovie} returnHome={this.returnHome} />
        }
      </main>
    )
  }
}

export default App
