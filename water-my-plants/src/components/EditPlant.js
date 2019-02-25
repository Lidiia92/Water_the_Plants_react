import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import {WrapperCentered, FormWrapper} from '../styled_components/styled.js';
import '../App.css';

/* Component */

class EditPlantForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.location.state.plant.name,
            // characteristic: props.plant.characteristic,
            // description: props.plant.description,
            // lastWater: props.plant.lastWater,
            // nextWater: props.plant.nextWater,
            // img_url: props.plant.img_url,
            // id: props.plant.id

        }
      }

   

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('jwtToken');
            const userId = localStorage.getItem('newUserId');
            const endpoint = `https://wmp2-back-end.herokuapp.com/api/users/${userId}/plants`;

            const options = {
                headers: {
                  Authorization: token
                }
              }
            const res = await axios.post(endpoint, this.state, options);
            console.log('test');
            const { data } = await res;
            console.log('test', data);

            this.clearState();
            this.visitpage();
        }
        catch(err){
            console.log('ERROR', err);
        }
        
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    clearState = () => {
        this.setState({
            name: '',
            characteristic: '',
            description: '',
            lastWater: '',
            nextWater: '',
            img_url: ''
        })
    }

    visitpage() {
        this.props.history.push("/myplants");
    }

    render(){
        console.log('edit form state', this.props.location.state.plant);
        return (
            <WrapperCentered>
                <NavigationMenu isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
                <FormWrapper>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field mg-top">
                        <label>Name *</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange}
                            placeholder="Name" required/>
                    </div>
                    <div className="field">
                        <label>Description *</label>
                        <textarea
                            rows="3" 
                            name="description" 
                            value={this.state.description} 
                            onChange={this.handleChange}
                            placeholder="Tell us something about your plant..." required>
                        </textarea>

                    </div>
                    <div className="field">
                        <label>Characteristic</label>
                        <input 
                            type="text" 
                            name="characteristic" 
                            value={this.state.characteristic} 
                            onChange={this.handleChange}
                            placeholder="Characteristic" />
                    </div>
                    <div className="field">
                        <label>When did you last water your plant?</label>
                        <input 
                            type="date" 
                            name="lastWater" 
                            value={this.state.lastWater} 
                            onChange={this.handleChange}
                            placeholder="Last Watered" />
                    </div>

                    <div className="field">
                        <label>Next date to water your plant</label>
                        <input 
                            type="date" 
                            name="nextWater" 
                            value={this.state.nextWater} 
                            onChange={this.handleChange}
                            placeholder="Next Water" />
                    </div>

                    <div className="field">
                        <label>Image URL of your plant</label>
                        <input 
                            type="text" 
                            name="img_url" 
                            value={this.state.img_url} 
                            onChange={this.handleChange}
                            placeholder="Image URL of your plant" />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                    </form>
                </FormWrapper>
              
            </WrapperCentered>
        );
    }
  };
  
  export default EditPlantForm;