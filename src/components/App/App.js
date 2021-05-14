import React, { Component } from 'react'
import AllMovies from '../AllMovies/AllMovies'
import MovieInfo from '../MovieInfo/MovieInfo'
import './App.css'
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      currentCard: null
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ currentCard: Number(event.target.id) })
  }

  returnHome = (event) => {
    event.preventDefault();
    this.setState({ currentCard: null })
  }

  findMovie = () => {
    const currentMovie = this.state.movies.find(movie => movie.id === this.state.currentCard)
    return currentMovie
  }

  render() {
    return (
      <main>
        <nav className="nav-bar">
          <h1>Rotten Tomatillos</h1>
          <h2>Profile</h2>
        </nav>
        <p>landing img</p>
        { !this.state.currentCard &&
          <AllMovies movieData={this.state.movies} handleClick={this.handleClick}/>
        }
        { this.state.currentCard &&
          <MovieInfo currentMovieInfo={this.findMovie()} returnHome={this.returnHome} />
        }

      </main>
    )
  }
}

export default App
