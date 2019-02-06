import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/jumbotronHomePage';

class App extends Component {

  state = {
      isLoggedIn: false
  }

  render() {
    return (
      <div className="App bg">
        <Jumbotron isLoggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}


export default App;
