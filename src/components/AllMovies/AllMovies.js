import React, { Component } from 'react'
import Movie from '../Movie/Movie'
import './AllMovies.css'


class AllMovies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: null
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ currentCard: [event.target.id] })
  }

  findClickedMovie = () => {
    const findMovie = this.props.movieData.find(movie => movie.id === this.state.currentCard);
    console.log(findMovie);
    return findMovie
  }

  allMovies = this.props.movieData.map(movie => {
    return (
      <Movie
        key = {movie.id}
        id = {movie.id}
        posterPath = {movie['poster_path']}
        title = {movie.title}
        avgRating = {movie['average_rating']}
        onClick = {event => this.handleClick(event)}
      />
    )
  })

  render() {
    return (
      <section>
        { !this.state.currentCard && this.allMovies}
        { this.state.currentCard &&
          this.findClickedMovie &&
          <div>its working</div>
        }
      </section>
    )
  }

}

export default AllMovies
