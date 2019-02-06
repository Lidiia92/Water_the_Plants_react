import React from "react";
import {FlexNav, BrandWrapper, Brand, Tab} from '../styled_components/styled.js';


/* Component */

const NavigationBar = props => {

    const isLoggedInNote = () => {
        const isLoggedIn = this.props.isLoggedIn;
    }

    return (
        
            <FlexNav>
                <BrandWrapper>
                    <Brand href="#">Planter</Brand>
                    <Tab href="#">My Plants</Tab>
                </BrandWrapper>
                <div>
                    <a href="#">Log In</a>
                    <a href="#">Log In</a>
                </div>
            </FlexNav>
    );
  };
  
  export default NavigationBar;