import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import {WrapperCentered, SinglePlantWrapper} from '../styled_components/styled.js';
import { Card, Icon, Image } from 'semantic-ui-react';
import '../App.css';




/* Component */

class SinglePlant extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            plant: '',
            id: props.match.params.id
        }
      }
   

    async componentDidMount(){
        this.getData();
        console.log('id', this.state.id);
         
        
    }
  
    async getData() {
      try {
        const token = localStorage.getItem('jwtToken');
    
        const endpoint = `https://wmp2-back-end.herokuapp.com/api/plants/${this.state.id}`;
  
        const options = {
          headers: {
            Authorization: token
          }
        }
        const res = await axios.get(endpoint, options);
        const { data } = await res;
        console.log('test 345', res.data);
        this.setState({
            ...this.state,
            plant: res.data
        })
      }
      catch (err) {
        console.error('ERR', err)
      }
    }



    visitpage() {
        this.props.history.push("/myplants");
    }

   


    render(){

        return (
           
            <WrapperCentered>
                <NavigationMenu isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
                <SinglePlantWrapper>
                    <Card>
                        <Image src={this.state.plant.img_url} />
                        <Card.Content>
                        <Card.Header>{this.state.plant.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{this.state.plant.characteristic}</span>
                        </Card.Meta>
                        <Card.Description>{this.state.plant.description}</Card.Description>
                        
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='arrow alternate circle right outline' />
                            Delete Plant
                        </a>
                        </Card.Content>
                    </Card>
                </SinglePlantWrapper>
                <a className="addplant editplant" href="#">Edit Plant</a>
            </WrapperCentered>
         
        );
    }
  };
  
  export default SinglePlant;