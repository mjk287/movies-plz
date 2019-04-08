import React from 'react'
import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'
import MovieForm from './MovieForm'

class MoviesContainer extends React.Component {

  state = {
    movieId: null,
  }

  switchToDetail = (movieId) => {
    this.setState({
      movieId: movieId
    })

    this.props.handleDetail()
  }

  findMovie = () => {
    return this.props.movies.find((movie) => {
      return movie.id === this.state.movieId
    })
  }

  handleMovieSubmit = (e, movieObj) => {
    e.preventDefault()

    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(movieObj)
    })
    .then(resp => resp.json())
    .then(parsedResp => {
      const newMovies = this.state.movies

      this.setState({
        movies: [movieObj, ...newMovies]
      })
    })
  }

  render(){
    return(
      <div>
      <MovieForm handleSubmit={this.handleMovieSubmit}/>
      { this.props.isClicked ?
        <MovieDetail movie={this.findMovie()}/>
        :
        <MoviesList movies={this.props.movies} handleClick={this.switchToDetail}/>
      }
      </div>
    )
  }
}

export default MoviesContainer
