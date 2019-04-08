import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './component/MoviesContainer'
import MovieForm from './component/MovieForm'
import Nav from './component/Nav'

class App extends Component {
  state = {
    movies: [],
    isClicked: false
  }

  handleNav = () => {
    this.setState({
      isClicked: false
    })
  }

  handleDetail = () => {
    this.setState({
      isClicked: true
    })
  }


  componentDidMount(){
    fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(parsedResp => {
      this.setState({
        movies: parsedResp
      })
    })
  }

  render() {
    return (
      <div className="MoviePlz">
        <Nav handleClick={this.handleNav}/>
        <MoviesContainer movies={this.state.movies} isClicked={this.state.isClicked} handleDetail={this.handleDetail}/>
      </div>
    );
  }
}

export default App;
