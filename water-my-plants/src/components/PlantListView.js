import React, {Component} from "react";
import {PlantListViewWrapper, PlantListViewImg, PlantListViewText} from '../styled_components/styled.js';
import '../App.css';



const PlantsListView = props => {
    
  
    return (
        <PlantListViewWrapper>
            <div>
                <PlantListViewImg src={props.img_url}/>
            </div>
            <PlantListViewText>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </PlantListViewText>
            {props.needsToWater && <p>Water me</p>}
            {props.alreadyWatered && <p>Update my schedule</p>}
        </PlantListViewWrapper>
    );
  };


export default PlantsListView; 