import React, { Component } from 'react'
import AllMovies from '../AllMovies/AllMovies'

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
      <AllMovies movieData={this.state.movies}/>
    )
  }
}

export default App
