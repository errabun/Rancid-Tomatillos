import React, { Component } from 'react'
import './MovieInfo.css'
import { Link } from 'react-router-dom'
import { fetchMovieId } from '../../utilities/ApiCalls'

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentMovieInfo,
      currentMovie: null
    }
  }

  componentDidMount() {
    fetchMovieId(this.state.id)
      .then(data => {
        this.setState({ currentMovie: data.movie })
      })
      .catch((error) => this.setState({ error: "Couldn't fetch the movie you selected, please try again!" }))
  }

  render() {

    return (
      this.state.currentMovie ?
      <section className='movie-card'>
        <img src={this.state.currentMovie.backdrop_path} alt='movie backdrop' className='movie-backdrop' />
        <div className='movie-display'>
          <img src={this.state.currentMovie.poster_path} alt='movie poster' className='movie-poster' />
          <article className='movie-stats'>
            <h2>{this.state.currentMovie.title}</h2>
            <h3>{this.state.currentMovie.average_rating}</h3>
            <p>{this.state.currentMovie.release_date}</p>
            <p>{this.state.currentMovie.overview}</p>
            <p>{this.state.currentMovie.genres}</p>
            <p>{this.state.currentMovie.budget}</p>
            <p>{this.state.currentMovie.revenue}</p>
            <p>{this.state.currentMovie.runtime}</p>
            <p>{this.state.currentMovie.tagline}</p>
            <Link to='/'>
              <button>Return Home</button>
            </Link>
          </article>
        </div>
      </section> :
      <h1>Loading...</h1>
    )
  }
}

export default MovieInfo
