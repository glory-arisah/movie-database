import React from 'react'
import MovieTags from './MovieTags'
import { Link } from 'react-router-dom'

const LinkStyle = {
  textDecoration: 'none',
  color: '#222'
}

const MovieCard = ({ id, poster_path, title, overview, vote_average, genre_ids, genre_map }) => {
  return (
    <article className='movie-card'>
      <Link to={`/movies/${id}`} style={LinkStyle}>
        <img className='movie__img' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="nothing" />
        {/* <span className='movie-overview'>{overview}</span> */}
        <p className='movie-title'>{title}</p>
      </Link>
      <p style={{ fontSize: 13, color: '#ead00cf9' }}>&#9733; {vote_average}</p>
      <MovieTags genre_ids={genre_ids} genre_map={genre_map} />
    </article>
  )
}

export default MovieCard