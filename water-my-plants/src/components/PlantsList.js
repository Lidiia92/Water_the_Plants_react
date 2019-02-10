import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import {WrapperCentered, PlantsHeading, PlantsQuontity} from '../styled_components/styled.js';
import { Button, Card, Image } from 'semantic-ui-react'
import '../App.css';

/* Component */

class PlantList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            plants: [],
            searchPlant: ''

        }
      }
   

    componentDidMount(){
        this.getData();
        
    }
  
    async getData() {
      try {
        const token = localStorage.getItem('jwtToken');
        const userId = localStorage.getItem('newUserId');

        const endpoint = `https://wmp2-back-end.herokuapp.com/api/users/${userId}/plants`;
  
        const options = {
          headers: {
            Authorization: token
          }
        }
        const res = await axios.get(endpoint, options);
        const { data } = await res;
        console.log(res.data);
        this.setState({
            plants: res.data.plants
        })
        console.log('State', this.state);
      }
      catch (err) {
        console.error('ERR', err)
      }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }


    visitpage() {
        this.props.history.push("/myplants");
    }


    render(){
        const plantsq = this.state.plants.length;
        return (
            <WrapperCentered>
                <NavigationMenu isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
                <div className="ui form">
                    
                    <div className="fields centered-width">
                        <button className="left floated addplant">Add Plant</button>
                        <div className="eight wide field centered">
                            <input type="text" placeholder="Start typing plant's name" />
                        </div>
                    </div>
                </div>
                <PlantsHeading>
                    <PlantsQuontity>All Plants: <span>{plantsq}</span></PlantsQuontity>
                </PlantsHeading>

            </WrapperCentered>
        );
    }
  };
  
  export default PlantList;