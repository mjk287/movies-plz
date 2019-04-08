import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
  const makeMoviesList = () => {
    return props.movies.map((movie) => {
      return <MovieCard movie = {movie} handleClick={props.handleClick}/>
    })
  }

  return (
    <div>
      {makeMoviesList()}
    </div>
  )
}

export default MoviesList
