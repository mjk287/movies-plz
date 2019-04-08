import React from 'react'

class MovieForm extends React.Component {
  state = {
    title: '',
    description: '',
    image: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <form className='movieForm' onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
        <label> Title:
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </label><br/>
        <label> Description:
        <textarea name="description" rows="8" cols="80" value={this.state.description} onChange={this.handleChange}/>
        </label><br/>
        <label> Image:
        <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
        </label><br/>
        <input type='submit' value='Movie Me!'/>
      </form>
    )
  }
}

export default MovieForm
