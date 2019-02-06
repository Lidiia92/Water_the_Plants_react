import React, { Component } from 'react';
import {WrapperCentered} from '../styled_components/styled.js';
import NavigationMenu from './NavBar';

class Jumbotron extends Component {
  render() {
    return (
       <WrapperCentered>
           <NavigationMenu isLoggedIn={this.props.isLoggedIn}/>
       </WrapperCentered>
    );
  }
}

export default Jumbotron;