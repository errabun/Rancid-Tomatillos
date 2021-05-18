import React from 'react'
import './MovieInfo.css'

const MovieInfo = ({ currentMovieInfo, returnHome }) => {
  const {
    id,
    title,
    poster_path,
    backdrop_path,
    release_date,
    overview,
    genres,
    budget,
    revenue,
    runtime,
    tagline,
    average_rating
  } = currentMovieInfo
  return (
    <section className='movie-card'>
      <img src={backdrop_path} alt='movie backdrop' className='movie-backdrop' />
      <div className='movie-display'>
        <img src={poster_path} alt='movie poster' className='movie-poster' />
        <article className='movie-stats'>
          <h2>{title}</h2>
          <h3>{average_rating}</h3>
          <p>{release_date}</p>
          <p>{overview}</p>
          <p>{genres}</p>
          <p>{budget}</p>
          <p>{revenue}</p>
          <p>{runtime}</p>
          <p>{tagline}</p>
          <button onClick={event => returnHome(event)}>Return Home</button>
        </article>
      </div>
    </section>
  )
}

export default MovieInfo
