import React from 'react'
import './MovieInfo.css'
import { Link } from 'react-router-dom'

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

  const roundedRating = Number.parseFloat(average_rating).toFixed(2)

  return (
    <section className='movie-card'>
      <img src={backdrop_path} alt='movie backdrop' className='movie-backdrop' />
      <div className='movie-display'>
        <img src={poster_path} alt='movie poster' className='movie-poster' />
        <article className='movie-stats'>
          <h2>{title}</h2>
          <h3>{roundedRating}</h3>
          <p>{release_date}</p>
          <p>{overview}</p>
          <p>{genres}</p>
          <p>{budget}</p>
          <p>{revenue}</p>
          <p>{runtime}</p>
          <p>{tagline}</p>
          <Link to='/'>
            <button>Return Home</button>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default MovieInfo
