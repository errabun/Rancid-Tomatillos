import React from 'react'
import App from '../App/App'
import Movie from '../Movie/Movie'
import './AllMovies.css'

const AllMovies = (props) => {
  const allMovies = props.movieData.map(movie => {
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
  return (
    <section>{allMovies}</section>
  )
}

export default AllMovies
