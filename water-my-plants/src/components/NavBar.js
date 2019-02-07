import React from "react";
import {FlexNav, BrandWrapper, Brand, Tab, LogInBTn} from '../styled_components/styled.js';



/* Component */

const NavigationBar = props => {

    function displayPlants(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return props.visitPage();
        }
        return props.notify();
      }


    return (
            <FlexNav>
                <BrandWrapper>
                    <Brand href="#">Planter</Brand>
                    <Tab href="#" onClick={() => displayPlants(props)}>My Plants</Tab>
                </BrandWrapper>
                <div>
                    <LogInBTn href="#">Log In</LogInBTn>
                    <LogInBTn href="#">Sign Up</LogInBTn>
                </div>
            </FlexNav>
    );
  };
  
  export default NavigationBar;