import React from 'react'
import MovieReviews from './MovieReviews'

const MovieDetail = (props) => {


  return (
    <div className='MovieDetail'>
      <img src={props.movie.image}/>
      <h1>{props.movie.title}</h1>
      <p>{props.movie.description}</p>
      <MovieReviews movie={props.movie}/>
      <iframe width="0" height="0" allow="autoplay"
      src={embedMusic(props.movie.soundtrack)}>
      </iframe>
    </div>
  )
}

const embedMusic = (input) => {
  const videoId = input.split('v=')[1]
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`
}

export default MovieDetail
