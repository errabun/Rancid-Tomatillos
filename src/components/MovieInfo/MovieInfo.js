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

  roundRating = (num) => {
    return Math.round(num * 100) / 100
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
            <h2 className='title'>{this.state.currentMovie.title}</h2>
            <h3 className='avg-rating'>{this.roundRating(this.state.currentMovie.average_rating)}</h3>
            <p className='release-date'>{this.state.currentMovie.release_date}</p>
            <p className='overview'>{this.state.currentMovie.overview}</p>
            <p className='genres'>{this.state.currentMovie.genres}</p>
            <p className='budget'>{this.state.currentMovie.budget}</p>
            <p className='revenue'>{this.state.currentMovie.revenue}</p>
            <p className='runtime'>{this.state.currentMovie.runtime}</p>
            <p className='tagline'>{this.state.currentMovie.tagline}</p>
            <Link to='/'>
              <button className='return-home'>Return Home</button>
            </Link>
          </article>
        </div>
      </section> :
      <h1>Loading...</h1>
    )
  }
}

export default MovieInfo
