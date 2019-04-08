import React from 'react'

const ReviewCard = (props) => {
  return(
    <div className='reviewCard'>
      <h3>{props.review.title}</h3>
      <p>{props.review.content}</p>
    </div>
  )
}

export default ReviewCard
