import React from "react";
import {FlexNav, BrandWrapper, Brand, Tab} from '../styled_components/styled.js';



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
                    <a href="#">Log In</a>
                    <a href="#">Log In</a>
                </div>
            </FlexNav>
    );
  };
  
  export default NavigationBar;