import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewList = (props) => {
  const makeReviewsList = () => {
    return props.reviews.map((review) => {
      return <ReviewCard review={review}/>
    })
  }

  return (
    <div className='ReviewList'>
      {makeReviewsList()}
    </div>
  )
}

export default ReviewList
