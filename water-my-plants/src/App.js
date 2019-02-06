import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/jumbotronHomePage';

class App extends Component {
  render() {
    return (
      <div className="App bg">
        <Jumbotron />
      </div>
    );
  }
}

export default App;
