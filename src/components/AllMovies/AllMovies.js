import React, { Component } from 'react'
import Movie from '../Movie/Movie'
import Search from '../SearchBar/SearchBar'
import './AllMovies.css'
import { fetchAllMovies } from '../../utilities/ApiCalls'

class AllMovies extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch((error) => this.setState({ error: "Couldn't load any movies, please try again!" }))
  }

  allMovies() {
    const mappedMovies = this.state.movies.map(movie => {
      return (
        <Movie
          key = {movie.id}
          id = {movie.id}
          posterPath = {movie['poster_path']}
          title = {movie.title}
          avgRating = {movie['average_rating']}
        />
      )
    })
    return mappedMovies
  }

  render() {
    return (
      <>
        <div className='landing-img'>
          <Search />
        </div>
        <section>
          {!this.state.movies.length &&
            !this.state.error &&
            <h1 className='loading'>Loading...</h1>
          }
          {this.state.error &&
            <h1 className='error-msg'>{this.state.error}</h1>
          }
          {!this.state.error &&
            this.state.movies.length &&
            <section className='all-movies'>{this.allMovies()}</section>
          }
        </section>
      </>
    )
  }
}

export default AllMovies
