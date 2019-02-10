import React from "react";
import {FlexNav, BrandWrapper, Brand, Tab, LogInBTn} from '../styled_components/styled.js';



/* Component */

const NavigationBar = props => {

    function displayPlants(e, props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return props.visitPage;
        }
        return (e.preventDefault(), props.notify());
    }
    
    function link(){
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return "/myplants";
          }
          return "/";
    }


    return (
            <FlexNav>
                <BrandWrapper>
                    <Brand href="/">Planter</Brand>
                    <Tab href={link()} onClick={(e) => displayPlants(e, props)}>My Plants</Tab>
                </BrandWrapper>
                <div>
                    <LogInBTn href="#">Log In</LogInBTn>
                    <LogInBTn href="/register">Sign Up</LogInBTn>
                </div>
            </FlexNav>
    );
  };
  
  export default NavigationBar;