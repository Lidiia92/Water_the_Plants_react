import React, { Component } from 'react';
import {WrapperCentered} from '../styled_components/styled.js';
import NavigationMenu from './NavBar';

class Jumbotron extends Component {

    constructor(props) {
        super(props);
    }
    

  render() {
    return (
       <WrapperCentered>
           <NavigationMenu isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
           <div>
               <h2>Take Care of Your Plants</h2>
           </div>
       </WrapperCentered>
    );
  }
}

export default Jumbotron;