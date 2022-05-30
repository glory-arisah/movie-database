import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import './movies.css'
import { DotLoader } from 'react-spinners'

const Movies = ({ loaded, movies, genre_map }) => {
  console.log(movies)

  let loaderStyle = {
    display: loaded ? 'none' : 'block',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    margin: 'auto',
  }

  return (
    <section className='movies'>
      <DotLoader loaded={loaded} size={40} css={loaderStyle} />
      {loaded && movies.map((movie) => <MovieCard {...movie} key={movie.id} genre_map={genre_map} />)}
    </section>
  )
}

export default Movies