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

  formatGenres = (genres) => {
    return genres.join(", ")
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
      <>
        {!this.state.currentMovie &&
          <h1>{this.state.error}</h1>
        }
        {!this.state.currentMovie &&
          !this.state.error &&
          <h1>Loading...</h1>
        }
        {this.state.currentMovie &&
        <section className='movie-card' style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.state.currentMovie.backdrop_path})`
        }}>
          <img src={this.state.currentMovie.poster_path} alt='movie poster' className='ind-movie-poster' />
          <article className='movie-stats'>
            <div className='title-rating-genres'>
              <h2 className='title'>{this.state.currentMovie.title}</h2>
              <h3 className='avg-rating'>Rating: {this.roundRating(this.state.currentMovie.average_rating)}</h3>
              <p className='genres'>{this.formatGenres(this.state.currentMovie.genres)}</p>
            </div>
            <table className='data-table'>
                <tr className='top-row'>
                  <td>Runtime</td>
                  <td>Release Date</td>
                </tr>
                <tr>
                  <td>{this.state.currentMovie.runtime} minutes</td>
                  <td>{this.state.currentMovie.release_date}</td>
                </tr>
            </table>
            <div className='overview-tag'>
              <p className='overview'>{this.state.currentMovie.overview}</p>
              <p className='tagline'>{this.state.currentMovie.tagline}</p>
            </div>
            <table className='data-table'>
                <tr className='top-row'>
                  <td>Budget</td>
                  <td>Revenue</td>
                </tr>
                <tr>
                  <td>${this.state.currentMovie.budget}</td>
                  <td>${this.state.currentMovie.revenue}</td>
                </tr>
            </table>
            <Link to='/'>
              <button className='return-home'>Return Home</button>
            </Link>
          </article>
        </section>}
      </>
    )
  }
}

export default MovieInfo
