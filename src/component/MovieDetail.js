import React from 'react'
import MovieReviews from './MovieReviews'

const MovieDetail = (props) => {
  return (
    <div className='MovieDetail'>
      <img src={props.movie.image}/>
      <h1>{props.movie.title}</h1>
      <p>{props.movie.description}</p>
      <MovieReviews movie={props.movie}/>
    </div>
  )
}

export default MovieDetail
