import React from 'react'

class ReviewForm extends React.Component {
  state = {
    title: '',
    content: '',
    movie_id: this.props.movie.id
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <form onSubmit={(e) => this.props.handleReviewSubmit(e, this.state)}>
        <label>Title:
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
        </label><br/>
        <label>Content:
          <textarea name='content' value={this.state.content} onChange={this.handleChange}/>
        </label><br/>
        <input type='submit' value='Review Me!'/>
      </form>
    )
  }
}

export default ReviewForm
