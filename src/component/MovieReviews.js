import React from 'react'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'

class MovieReviews extends React.Component {

  state = {
    reviews: []
  }

  handleReviewSubmit = (e, reviewObj) => {
    e.preventDefault()

    fetch(`http://localhost:3000/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewObj)
    })
    .then(resp => resp.json())
    .then(parsedResp => {
      const newReviews = [...this.state.reviews, parsedResp]

      this.setState({
        reviews: newReviews
      })
    })

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
      <div className='reviews'>
        <ReviewList reviews={this.state.reviews}/>
        <ReviewForm movie={this.props.movie} handleReviewSubmit={this.handleReviewSubmit}/>
      </div>
    )
  }
}

export default MovieReviews
