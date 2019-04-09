import React, { Component } from 'react';
import './App.scss';
import MoviesContainer from './component/MoviesContainer'
import MovieForm from './component/MovieForm'
import Nav from './component/Nav'

class App extends Component {
  state = {
    isClicked: false
  }

  goHome = () => {
    this.setState({
      isClicked: false
    })
  }

  goDetail = () => {
    this.setState({
      isClicked: true
    })
  }

  render() {
    return (
      <div className="MoviePlz">
        <Nav handleClick={this.goHome}/>
        <MoviesContainer isClicked={this.state.isClicked} goDetail={this.goDetail} goHome={this.goHome}/>
      </div>
    );
  }
}

export default App;
