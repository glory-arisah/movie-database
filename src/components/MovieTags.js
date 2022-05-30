import React from 'react'

const MovieTags = ({ genre_ids, genre_map }) => {
  return (
    <div className="movie-tag">
      {genre_map(genre_ids).map((val) => <button className="movie-tag__btn">{val}</button>)}
    </div>
  )
}

export default MovieTags