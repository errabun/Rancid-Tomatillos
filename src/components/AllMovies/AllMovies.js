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

  allMovies(data) {
    const mappedMovies = data.map(movie => {
      return (
        <Movie
          key = {movie.id}
          id = {movie.id}
          posterPath = {movie['poster_path']}
          title = {movie.title}
        />
      )
    })
    return mappedMovies
  }

  submitSearch = inputData => {
    const findMovie = this.state.movies.filter(movie => {
      const titleLower = movie.title.toLowerCase()
      return titleLower.includes(inputData.toLowerCase())
    })
    if (!findMovie.length) {
      this.setState({ error: "No movies matched your search!" })
    }
    this.setState({ foundMovie: findMovie })
  }

  render() {
    return (
      <>
        <div className='landing-img'>
          <Search submitSearch={this.submitSearch} />
        </div>
        <section className='movie-display'>
          {!this.state.movies.length &&
            !this.state.error &&
              <h1 className='loading user-msg'>Loading...</h1>
          }
          {this.state.error &&
            <div className='msg-container'>
              <h1 className='error-msg user-msg'>{this.state.error}</h1>
              <button className='return-home' onClick={() => {window.location.href="/"}}>Return Home</button>
            </div>
          }
          {!this.state.error &&
            this.state.foundMovie &&
            <section className='all-movies'>{this.allMovies(this.state.foundMovie)}</section>
          }
          {!this.state.error &&
            !this.state.foundMovie &&
            this.state.movies.length &&
            <section className='all-movies'>{this.allMovies(this.state.movies)}</section>
          }
        </section>
      </>
    )
  }
}

export default AllMovies
