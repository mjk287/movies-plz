import React from 'react'

class MovieForm extends React.Component {
  state = {
    title: '',
    description: '',
    image: '',
    soundtrack: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div className='formContainer vertical-aligner'>
        <div className='overlay'></div>
        <form className='movieForm' onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
          <label> Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          <label> Description</label>
          <textarea name="description" rows="8" cols="80" value={this.state.description} onChange={this.handleChange}/>
          <label> Image</label>
          <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
          <label> Soundtrack</label>
          <input type="text" name="soundtrack" value={this.state.soundtrack} onChange={this.handleChange}/>
          <input type='submit' value='Movie Me!'/>
        </form>
      </div>
    )
  }
}

export default MovieForm
