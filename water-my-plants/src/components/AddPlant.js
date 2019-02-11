import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import {WrapperCentered, FormWrapper} from '../styled_components/styled.js';
import '../App.css';

/* Component */

class AddPlantForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '', 
            email: '',
            phone: '',

        }
      }
   

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const endpoint = 'https://wmp2-back-end.herokuapp.com/api/register';
            const res = await axios.post(endpoint, this.state);
            console.log('test');
            const { data } = await res;
            console.log('test', data);
            localStorage.setItem('jwtToken', res.data.token);
            localStorage.setItem('newUserId', res.data.newUser);
            this.props.loggedIn(true);
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
            username: '',
            password: '', 
            email: '',
            phone: ''
        })
    }

    visitpage() {
        this.props.history.push("/myplants");
    }

    render(){
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
                    <button className="ui button" type="submit">Submit</button>
                    </form>
                </FormWrapper>
              
            </WrapperCentered>
        );
    }
  };
  
  export default AddPlantForm;