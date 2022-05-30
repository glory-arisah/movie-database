import React, { useState, useEffect } from 'react'
import './App.css'
import Movies from './components/Movies';
import client from './components/axios'
import MovieDetail from './components/MovieDetail';
import {
  Route,
  Routes,
  useLocation
} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [location, setLocation] = useState('')
  const [tags, setTags] = useState([])

  let currLocation = useLocation()

  useEffect(() => {
    client.get('/discover/movie', { params: {
      api_key: process.env.REACT_APP_TMDB_API_KEY
    }})
      .then(response => {
        setMovies(response.data.results)
        setLoaded(true)
      })
    .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    setLocation(currLocation.pathname)
    console.log(location)
  })

  useEffect(() => {
    client.get('/genre/movie/list', {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY
      }
    }).then(response => {
      setTags(response.data.genres)
    }).catch(error => console.error(error))
  }, [])

  const getGenre = (genre_ids) => {
    let genre_map = []
    const filterTags = tags.filter((tag) => {
      if (genre_ids.includes(tag.id)) {
        genre_map = [tag.name, ...genre_map]
      }
    })
    return genre_map
  }

  return (
    <div className="App">
      {location === '/' &&
        <header>
          <h2 className="header">ALL MOVIES</h2>
        </header>}
      <Routes>
        <Route index element={<Movies movies={movies} loaded={loaded} genre_map={getGenre} />} />
        <Route path="movies">
          <Route
            path=":movieId"
            element={<MovieDetail movies={movies} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
