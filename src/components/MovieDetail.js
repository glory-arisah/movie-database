import React from 'react'
import { useParams } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

const MovieDetail = ({ movies }) => {
  let params = useParams()

  const findMovie = () => {
    return movies.find((movie) => movie.id.toString() === params.movieId)
  }
  const currentMovie = findMovie()
  return (
    <>
      {currentMovie &&
      <div>
        <section className="backdrop__img-container">
          <img className="backdrop__img" src={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`} alt="" />
        </section>
        <section className="poster__img-container">
            <img className="poster__img" src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`} alt="" />
            <article className="movie--details">
              <span>Title: {currentMovie.title}</span>
              <StarRatings rating={currentMovie.vote_average / 2} starDimension={13} starSpacing='0' starRatedColor='#ead00cf9' />
            </article>
          </section>
          <article className="overview--detail">
            <h2>Overview</h2>
            <p>{currentMovie.overview}</p>
          </article>
      </div>}
    </>
  )
}

export default MovieDetail