import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import {WrapperCentered, FormWrapper, Icon} from '../styled_components/styled.js';
import '../App.css';

/* Component */

class Register extends Component {

    state = {
        username: '',
        password: '', 
        email: '',
        phone: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const endpoint = 'https://wmp2-back-end.herokuapp.com/api/register';
            const res = await axios.post(endpoint, this.state);
            const { data } = await res;
            console.log('test', data);
            localStorage.setItem('jwtToken', res.data.token);
            localStorage.setItem('newUserId', res.data.newUser);
            this.clearState();
            this.props.visitpage();
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
        })
    }


    render(){
        return (
            <WrapperCentered>
                <NavigationMenu isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
                <div>
                <Icon src={require('../images/Capture01.PNG')} />
                </div>
                <FormWrapper>
                    <form class="ui form">
                    <div class="field">
                        <label>Username</label>
                        <input type="text" name="first-name" placeholder="Username" required/>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type="password" name="last-name" placeholder="Password" required/>
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input type="email" name="last-name" placeholder="Email" required/>
                    </div>
                    <div class="field">
                        <label>Phone</label>
                        <input type="tel" name="last-name" placeholder="Phone" required/>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                    </form>
                </FormWrapper>
                <a href="https://www.freepik.com/free-photos-vectors/flowers">Flowers vector created by macrovector - www.freepik.com</a>
            </WrapperCentered>
        );
    }
  };
  
  export default Register;