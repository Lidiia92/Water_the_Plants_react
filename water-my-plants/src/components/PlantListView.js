import React, {Component} from "react";
import {PlantListViewWrapper, PlantListViewImg, PlantListViewText, ImageAndText, AwsomeWrapper, DifferenceWrapper} from '../styled_components/styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../App.css';


/* Component */


const PlantsListView = props => {

    
    let todaysDate;
    let plantsNextWater = props.nextWater;
    let todaysDateArr;
    let plantsNextWaterArr;
    let difference;
    let bool;
    const date = new Date();

    if(props.needsToWater === 0) {
        bool = false;
    }else {
        bool = true;
    }


    function getFormattedDate(date) {
            
        const year = date.getFullYear();
        
        let month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
    
        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        todaysDate = year + "-" + month + "-" + day;
        
        return todaysDate;
    }

    getFormattedDate(date);

    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    todaysDateArr = todaysDate.split('-').map(num => parseInt(num, 10));
    plantsNextWaterArr = plantsNextWater.split('-').map(num => parseInt(num, 10));
    if(plantsNextWaterArr[2] >= todaysDateArr[2]) {
        difference = plantsNextWaterArr[2] - todaysDateArr[2];
    } else if (plantsNextWaterArr[2] < todaysDateArr[2]) {
        difference = (daysInMonth(todaysDateArr[1], todaysDateArr[0]) - todaysDateArr[2] + plantsNextWaterArr[2]);
    }
    console.log('todaysDate', daysInMonth(3, 2019));  

  
    return (
        <PlantListViewWrapper>
            <ImageAndText>
                <PlantListViewImg src={props.img_url}/>
            <PlantListViewText>
                <Link to={`/myplants/${props.id}`} id={props.id}><h3>{props.name}</h3></Link>
                <p>{props.description}</p>
            </PlantListViewText>
            </ImageAndText>
            {bool && <AwsomeWrapper><FontAwesomeIcon icon="tint" /></AwsomeWrapper>}
            {!bool && <DifferenceWrapper><p>{difference} days left</p></DifferenceWrapper>}
           
        </PlantListViewWrapper>
    );
  };


export default PlantsListView; 