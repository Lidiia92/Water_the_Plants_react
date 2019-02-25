import React, {Component} from "react";
import axios from 'axios';
import NavigationMenu from './NavBar';
import {WrapperCentered, FormWrapper, Icon, License, MrgnTop} from '../styled_components/styled.js';
import '../App.css';

/* Component */

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '', 

        }
      }
   

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const endpoint = 'https://wmp2-back-end.herokuapp.com/api/login';
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

        })
    }

    visitpage() {
        this.props.history.push("/myplants");
    }

    render(){
        return (
            <WrapperCentered>
                <NavigationMenu signout={this.props.signout} isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
                <div>
                <Icon src={require('../images/Capture01.PNG')} />
                </div>
                <FormWrapper>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Username *</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange}
                            placeholder="Username" required/>
                    </div>
                    <div className="field">
                        <label>Password *</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange}
                            placeholder="Password" required/>
                    </div>

                    <button className="ui button" type="submit">Submit</button>
                    </form>
                </FormWrapper>
                <MrgnTop>
                    <License href="https://www.freepik.com/free-photos-vectors/flowers" >© Flowers vector created by macrovector - www.freepik.com</License>
                </MrgnTop>
            </WrapperCentered>
        );
    }
  };
  
  export default Login;