import React from 'react'
import ReviewList from './ReviewList'

class MovieReviews extends React.Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/movies/${this.props.movie.id}`)
    .then(resp => resp.json())
    .then(parsedResp => {
      this.setState({
        reviews: parsedResp
      })
    })
  }

  render() {
    return (
      <ReviewList reviews={this.state.reviews}/>
    )
  }
}

export default MovieReviews
