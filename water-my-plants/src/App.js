import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/jumbotronHomePage';
import Register from './components/Register.js';
import Login from './components/Login.js';
import PlantList from './components/PlantsList.js';
import AddPlantForm from './components/AddPlant.js';
import SinglePlant from './components/SinglePlant.js';
import EditPlantForm from './components/EditPlant.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTint } from '@fortawesome/free-solid-svg-icons';
 
library.add(faTint);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      searchPlant: '',
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

  signout = () => {

    localStorage.removeItem('jwtToken');
    localStorage.removeItem('newUserId');
    //window.location.reload();
  }


  render() {
    return (
        <Router>
          <div>
            <div className="App bg">



                <Route path="/" exact render={props => <Jumbotron 
                    isLoggedIn={this.state.isLoggedIn} 
                    notify={this.notify} 
                    visitPage={this.visitPage}/>} />
                
                <Route 
                    path="/register" 
                    render={props => <Register {...props} signout={this.signout} isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} notify={this.notify} />} />


                <Route 
                    path="/myplants" exact 
                    render={props => <PlantList {...props} signout={this.signout} isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} notify={this.notify} watering={this.state.watering} waterThePlants={this.waterThePlants}/>} />       
              

                <Route 
                    path="/addplant" 
                    render={props => <AddPlantForm {...props} signout={this.signout} isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} notify={this.notify} />} /> 

                <Route 
                    path="/myplants/:id" 
                    render={props => <SinglePlant {...props} signout={this.signout} isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} notify={this.notify}/>} /> 

                <Route 
                    path="/plant/:id/edit" 
                    render={props => <EditPlantForm {...props} signout={this.signout} isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} notify={this.notify}/>} />
                    
                  <Route 
                    path="/login" 
                    render={props => <Login {...props} signout={this.signout} isLoggedIn={this.state.isLoggedIn} loggedIn={this.loggedIn} notify={this.notify} />} />
                <ToastContainer />
            </div>

          </div>
        </Router>
    );
  }
}


export default App;
