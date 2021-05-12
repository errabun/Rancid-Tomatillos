import React, { Component } from 'react'
import App from '../App/App'

class AllMovies extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const allTitles = this.props.movieData.map(movie => {
      return (
          <li>{movie.title}</li>
      )
    })
    return (
      <ul>{allTitles}</ul>
    )
  }
}

export default AllMovies
