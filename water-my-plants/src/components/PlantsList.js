import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import PlantsListView from './PlantListView.js';
import {WrapperCentered, PlantsHeading, PlantsQuontity, PlantListViewDiv, WaterThePlant, WateringWrapper, Reminder, Greeting} from '../styled_components/styled.js';
import { Button, Card, Image } from 'semantic-ui-react'
import '../App.css';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'RAIN',
  color: '#d4f1f9',
  size: 300,
  animate: true
};

const date = new Date();


/* Component */

class PlantList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            plants: [],
            watering: false,
            needsToWater: false
        }
      }
   

    async componentDidMount(){
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
        const today = await this.getFormattedDate(date);
        this.setState({
            ...this.state,
            plants: res.data.plants,
        });
        

        this.compareDates(this.state.plants);
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

    waterThePlants = () => {
        console.log('watering');
        if(!this.state.watering){
          this.setState({
            ...this.state,
            watering: true,
            needsToWater: false,
          });
        } else if (this.state.watering){
            const plantsAlreadyWatered = []; 
            this.state.plants.forEach(plant => {
                if(plant.needsToWater === 1){
                    plant.needsToWater = 0;
                    plantsAlreadyWatered.push(plant);
                } else {
                    plantsAlreadyWatered.push(plant);
                }
            });  

          this.setState({
            ...this.state,
            watering: false,
            needsToWater: false,
          });
        }
      }

    getFormattedDate(date) {
        
        const year = date.getFullYear();
        
        let month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return year + "-" + month + "-" + day;
    }

    compareDates = (updatedState) => {
        const today = this.getFormattedDate(date);
        const plantsDates = updatedState.map(plant => plant.nextWater);

        plantsDates.forEach(date => {
            if (today === date) {
                this.setState({
                    ...this.state,
                    needsToWater: true
                })
            } 
        });

        const plantsNeedsToWater = []; 
        updatedState.forEach(plant => {
            if(today === plant.nextWater){
                plant.needsToWater = 1;
                plantsNeedsToWater.push(plant);
            } else {
                plantsNeedsToWater.push(plant);
            }
        });
        console.log(plantsNeedsToWater, 'plantsneedsto wter');
        this.setState({
            ...this.state,
            plants: plantsNeedsToWater,
        });

        console.log(updatedState, 'updatedState finalle');
    }


    render(){
        const plantsq = this.state.plants.length;
        console.log('The latest state', this.state);
        return (
           
            <WrapperCentered>
                <NavigationMenu signout={this.props.signout} isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
                <div className="ui form">
                    
                    <div className="fields centered-width">
                        <a href="/addplant" className="left floated addplant">Add Plant</a>
                        <div className="eight wide field centered">
                            <Greeting>Welcome, to your Planter App</Greeting>
                        </div>
                    </div>
                </div>
                <PlantsHeading>
                    <PlantsQuontity>All Plants: <span>{plantsq}</span></PlantsQuontity>
                </PlantsHeading>

               {this.state.watering &&
               <WateringWrapper>
                   <ReactAnimatedWeather
                       icon={defaults.icon}
                       color={defaults.color}
                       size={defaults.size}
                       animate={defaults.animate}
                   />
                   <br />
                   <WaterThePlant onClick={() => this.waterThePlants()}>Stop Watering</WaterThePlant>
                   <Reminder>Please update your watering schedule</Reminder>
               </WateringWrapper>
               }
                {!this.state.watering && this.state.plants.length > 0 &&
                    <div>
                        <PlantListViewDiv>
                            {this.state.plants.map(plant => <PlantsListView key={plant.id} id={plant.id} name={plant.name} img_url={plant.img_url} description={plant.description} needsToWater={plant.needsToWater} nextWater={plant.nextWater}/>)}
                        </PlantListViewDiv>
                        {this.state.needsToWater && 

                        <WaterThePlant onClick={() => this.waterThePlants()}>Water All</WaterThePlant>
                        }
                    </div>
                }


            </WrapperCentered>
         
        );
    }
  };
  
  export default PlantList;