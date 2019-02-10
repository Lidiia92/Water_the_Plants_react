import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import {WrapperCentered, PlantsWrapper} from '../styled_components/styled.js';
import { Card, Icon, Image } from 'semantic-ui-react';
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
        //this.getData();
    }
  
    async getData() {
      try {
        const token = localStorage.getItem('jwtToken');

        const endpoint = 'http://localhost:3300/api/jokes';
  
        const options = {
          headers: {
            Authorization: token
          }
        }
        const res = await axios.get(endpoint, options);
        const { data } = await res;
        console.log(res.data);
        this.setState({
          jokes: res.data
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
                <PlantsWrapper>


                </PlantsWrapper>
            </WrapperCentered>
        );
    }
  };
  
  export default PlantList;