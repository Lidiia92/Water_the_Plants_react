import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/jumbotronHomePage';
import Register from './components/Register.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('jwtToken');
    if(token){
      this.setState({
        isLoggedIn: true
      })
    }
  }

  notify = (e) => {

    console.log('test');
    toast.info("Please Log In to See Your Plants!", {
      position: toast.POSITION.TOP_CENTER
    });

  }

  loggedIn = (value) => {
    this.setState({
      isLoggedIn: value
    })
  }


  render() {
    return (
        <div>
          <div className="App bg">

              <Route path="/" exact render={props => <Jumbotron 
                  isLoggedIn={this.state.isLoggedIn} 
                  notify={this.notify} 
                  visitPage={this.visitPage}/>} />
              
              <Route 
                  path="/register" 
                  render={props => <Register {...props} isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} notify={this.notify} />} />} /> 


          
              <ToastContainer />
          </div>

          <Route 
                  path="/myplants" 
                  render={props => <div >Plants Route</div>} />} />       
        </div>
    );
  }
}


export default App;
