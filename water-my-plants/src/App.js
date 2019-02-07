import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/jumbotronHomePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false
    }
  }

  notify = () => {
    
    console.log('test');
    toast.info("Please Log In to See Your Plants!", {
      position: toast.POSITION.TOP_CENTER
    });

  }

  visitPage = () => {
    window.location='http://localhost:3000/myplants';
  }

  render() {
    return (
        <div className="App bg">
            <Jumbotron isLoggedIn={this.state.isLoggedIn} notify={this.notify} visitPage={this.visitPage}/>
            <ToastContainer />
        </div>
    );
  }
}


export default App;
