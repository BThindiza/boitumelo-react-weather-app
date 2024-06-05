import React from "react";
import formatDate from "./formatDate"
import weatherIcon from "./weatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
<h1>{props.data.city}</h1>
<ul>
    <li><formatDate date= {props.data.date}/></li>
    <li>{props.data.description}</li>
</ul>
<div className="row mt-3">
    <div className="col-6">
        <div className="d-flex">
            <div>
         <weatherIcon code={props.data.icon}/>   
        </div>
        <div>
            <WeatherTemperature celsius={props.data.temperature}/>
        </div>
      <div>
    </div>
    <div className="col-6">
        <ul>
        <li>{props.data.humidity} </li>
        <li>{props.data.wind} </li>
        </ul>
    </div>
</div>
</div>
</div>
</div>
    );
    
}