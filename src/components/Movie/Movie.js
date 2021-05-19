import React from 'react'
import './Movie.css'
import { Link } from 'react-router-dom'

const Movie = ({ id, posterPath, title, avgRating, onClick }) => {
  const roundedRating = Number.parseFloat(avgRating).toFixed(2)

  return (
    <Link to={`/movieInfo/${id}`} >
      <img src={posterPath} className="movie-poster" alt={title} id={id} onClick={onClick} />
    </Link>
  )
}

export default Movie
