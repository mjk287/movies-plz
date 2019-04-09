import React from 'react'
import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'
import MovieForm from './MovieForm'
import FilterMovies from './FilterMovies'

class MoviesContainer extends React.Component {

  state = {
    movieId: null,
    movies: [],
    filter: {
      filteredMovies: [],
      filterBy: '',
      sortBy: 'all'
    }
  }

  switchToDetail = (movieId) => {
    this.setState({
      movieId: movieId
    })

    this.props.goDetail()
  }

  findMovie = () => {
    return this.state.movies.find((movie) => {
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
        movies: [parsedResp, ...newMovies],
        filter: {
          ...this.state.filter,
          filteredMovies: [parsedResp, ...newMovies]
        }
      })
    })

    this.props.goHome()
  }

  handleFilter = (e) => {
    this.setState({
      filter: {
        ...this.state.filter,
        [e.target.name]: e.target.value
      }
    }, () => this.filterSortMovies())
  }

  filterSortMovies = () => {
    let newMovies = [...this.state.movies]

    switch(this.state.filter.sortBy){
      case 'alphabetical':
        newMovies.sort((movie1, movie2) => {
          const textA = movie1.title.toUpperCase()
          const textB = movie2.title.toUpperCase()

          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
        })

        break;
      default:
        newMovies = [...this.state.movies]
    }

    newMovies = newMovies.filter((movie) => {
      return movie.title.includes(this.state.filter.filterBy)
    })

    this.setState({
      filter: {
        ...this.state.filter,
        filteredMovies: newMovies
      }
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(parsedResp => {
      this.setState({
        movies: parsedResp,
        filter: {
          ...this.state.filter,
          filteredMovies: parsedResp
        }
      })
    })
  }

  render(){
    return(
      <div className='MoviesContainer'>
      <MovieForm handleSubmit={this.handleMovieSubmit}/>
      { this.props.isClicked ?
        <MovieDetail movie={this.findMovie()}/>
        :
        <div>
          <FilterMovies handleFilter={this.handleFilter} searchBy={this.state.searchBy}/>
          <MoviesList movies={this.state.filter.filteredMovies} handleClick={this.switchToDetail}/>
        </div>
      }
      </div>
    )
  }
}

export default MoviesContainer
