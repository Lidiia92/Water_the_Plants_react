import React, { Component } from 'react';
import {WrapperCentered, Img, JumbotronContent, TextContent, MainHeading, MainParagraph, DesignImages} from '../styled_components/styled.js';
import NavigationMenu from './NavBar';
import Collapsible from 'react-collapsible';
import '../App.css';

class Jumbotron extends Component {

    constructor(props) {
        super(props);
    }
    

  render() {
    return (
       <WrapperCentered>
           <NavigationMenu isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
           <JumbotronContent>
                <TextContent>
                    <MainHeading>Take Care of Your Plants</MainHeading>
                    <MainParagraph>Florem ipsum st john’s wort jersey lily canterbury bells sneezeweed love-in-a-mist. Crocus sword lily blue throatwort transvaal daisy arum.</MainParagraph>
                    <DesignImages>
                        <Collapsible trigger="Design Images:">
                        <div>
                            <a href="http://www.freepik.com">Designed by brgfx / Freepik</a> <br />
                            <a href="http://www.freepik.com">Designed by macrovector / Freepik</a>
                        </div>
                        </Collapsible>
                    </DesignImages>
                </TextContent>
                <div>
                    <Img src={require('../images/16181.jpg')} />
                </div>

           </JumbotronContent>
       </WrapperCentered>
    );
  }
}

export default Jumbotron;