import React from 'react'
import './MovieInfo.css'

const MovieInfo = ({ currentMovieInfo, returnHome }) => {
  const { id, poster_path, backdrop_path, title, average_rating } = currentMovieInfo
  return (
    <section className='movie-card'>
      <img src={backdrop_path} alt='movie backdrop' />
      <img src={poster_path} alt='movie poster' />
      <article className='movie-stats'>
        <h2>{title}</h2>
        <h3>{average_rating}</h3>
        <p>this is where we will add more info we want to display when we have it from the API fetch</p>
        <button onClick={event => returnHome(event)}>Return Home</button>
      </article>
    </section>
  )
}

export default MovieInfo
