import React from 'react'
import './Movie.css'

const Movie = ({ id, posterPath, title, avgRating, onClick }) => {
  const roundedRating = Number.parseFloat(avgRating).toFixed(2)

  return (
    <article className="movie-card" onClick={onClick}>
      <img src={posterPath} className="movie-poster" alt="movie poster" id={id}/>
      <div className="movie-info">
        <h3>{title}</h3>
        <h3>Rating: {roundedRating}</h3>
      </div>
    </article>
  )
}

export default Movie
