import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import PlantsListView from './PlantListView.js';
import {WrapperCentered, PlantsHeading, PlantsQuontity, PlantListViewDiv} from '../styled_components/styled.js';
import { Button, Card, Image } from 'semantic-ui-react'
import '../App.css';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 64,
  animate: true
};


/* Component */

class PlantList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            plants: [],
            searchPlant: '',
            watering: false

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
               {this.state.watering &&
                <ReactAnimatedWeather
                    icon={defaults.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
               }

                <NavigationMenu isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
                <div className="ui form">
                    
                    <div className="fields centered-width">
                        <a href="/addplant" className="left floated addplant">Add Plant</a>
                        <div className="eight wide field centered">
                            <input type="text" placeholder="Start typing plant's name" />
                        </div>
                    </div>
                </div>
                <PlantsHeading>
                    <PlantsQuontity>All Plants: <span>{plantsq}</span></PlantsQuontity>
                </PlantsHeading>
                <PlantListViewDiv>
                    {this.state.plants.map(plant => <PlantsListView name={plant.name} img_url={plant.img_url} description={plant.description}/>)}
                </PlantListViewDiv>

            </WrapperCentered>
         
        );
    }
  };
  
  export default PlantList;