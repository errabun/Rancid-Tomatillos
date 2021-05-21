import React, { Component } from 'react'
import Movie from '../Movie/Movie'
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
        <div className="landing-img">
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="movie icon" />
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
            <section>{this.allMovies()}</section>
          }
        </section>
      </>
    )
  }
}

export default AllMovies
