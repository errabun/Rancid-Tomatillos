import React from 'react'
import './Movie.css'

const Movie = ({ id, posterPath, title, avgRating, onClick }) => {
  const roundedRating = Number.parseFloat(avgRating).toFixed(2)

  return (
    <img src={posterPath} className="movie-poster" alt={title} id={id} onClick={onClick} />
  )
}

export default Movie
