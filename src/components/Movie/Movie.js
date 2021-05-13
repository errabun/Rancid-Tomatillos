import React from 'react'
import App from '../App/App'

const Movie = ({ id, posterPath, title, avgRating }) => {
  return (
    <article>
      <img src={posterPath} />
      <h3>{title}</h3>
      <h3>{avgRating}</h3>
    </article>
  )
}

export default Movie
