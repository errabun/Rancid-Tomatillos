import React from 'react'
import App from '../App/App'
import './Movie.css'

const Movie = ({ id, posterPath, title, avgRating }) => {
  const roundedRating = Number.parseFloat(avgRating).toFixed(2)

  return (
    <article className="movie-card">
      <img src={posterPath} className="movie-poster"/>
      <div className="movie-info">
        <h3>{title}</h3>
        <h3>Rating: {roundedRating}</h3>
      </div>
    </article>
  )
}

export default Movie
