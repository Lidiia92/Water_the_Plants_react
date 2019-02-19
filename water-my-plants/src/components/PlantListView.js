import React, {Component} from "react";
import {PlantListViewWrapper, PlantListViewImg, PlantListViewText, ImageAndText, AwsomeWrapper} from '../styled_components/styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';



const PlantsListView = props => {

    let bool;

    if(props.needsToWater === 0) {
        bool = false;
    }else {
        bool = true;
    }
    
    
  
    return (
        <PlantListViewWrapper>
            <ImageAndText>
                <PlantListViewImg src={props.img_url}/>
            <PlantListViewText>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </PlantListViewText>
            </ImageAndText>
            {bool && <AwsomeWrapper><FontAwesomeIcon icon="tint" /></AwsomeWrapper>}
           
        </PlantListViewWrapper>
    );
  };


export default PlantsListView; 