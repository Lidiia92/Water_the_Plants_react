import React, { Component } from 'react';
import {WrapperCentered, Img, JumbotronContent, TextContent, MainHeading, MainParagraph, DesignImages, License2, License2Wrapper} from '../styled_components/styled.js';
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
           <NavigationMenu signout={this.props.signout} isLoggedIn={this.props.isLoggedIn} notify={this.props.notify} visitPage={this.props.visitPage}/>
           <JumbotronContent>
                <TextContent>
                    <MainHeading>Take Care of Your Plants</MainHeading>
                    <MainParagraph>Florem ipsum st john’s wort jersey lily canterbury bells sneezeweed love-in-a-mist. Crocus sword lily blue throatwort transvaal daisy arum.</MainParagraph>
                    <DesignImages>
                        
                        <License2Wrapper>
                        <License2 href="https://www.freepik.com/free-photos-vectors/background">© Background vector created by macrovector - www.freepik.com</License2>
                        <License2 href="https://www.freepik.com/free-photos-vectors/background">© Background vector created by brgfx - www.freepik.com</License2>
                        </License2Wrapper>
                    
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