import React from 'react'
import './MovieInfo.css'

const MovieInfo = ({ currentMovieInfo }) => {
  const { id, poster_path, backdrop_path, title, average_rating } = currentMovieInfo
  return (
    <section className='movie-card'>
      <img src={backdrop_path} alt='movie backdrop' />
      <img src={poster_path} alt='movie poster' />
      <article className='movie-stats'>
        <h2>{title}</h2>
        <h3>{average_rating}</h3>
        // this is where we will add more info we want to display when we have it from the API fetch
      </article>
    </section>
  )
}

export default MovieInfo
