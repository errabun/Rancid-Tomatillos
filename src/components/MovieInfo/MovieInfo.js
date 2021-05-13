import React from 'react'
import './MovieInfo.css'

const MovieInfo = (movie) => {
  return (
    <section className='movie-card'>
      <img src={movie.backdrop_path} alt='movie backdrop' />
      <img src={movie.poster_path} alt='movie poster' />
      <article className='movie-stats'>
        <h2>{movie.title}</h2>
        <h3>{movie.rating}</h3>
        // this is where we will add more info we want to display when we have it from the API fetch
      </article>
    </section>
  )
}

export default MovieInfo
