import React from 'react'

const MovieCard = (props) => {

  return (
    <div className="movieCard" onClick={() => props.handleClick(props.movie.id)} >
      <h3>{props.movie.title}</h3>
    </div>
  )
}

export default MovieCard
