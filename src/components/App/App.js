import React, { Component } from 'react'
import AllMovies from '../AllMovies/AllMovies'
import './App.css'
import movieData from '../../movieData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <nav className="nav-bar">

          <h1>Rotten Tomatillos</h1>
          <h2>Profile</h2>
        </nav>
        <p>landing img</p>
        <AllMovies movieData={this.state.movies} />
      </main>
    )
  }
}

export default App
