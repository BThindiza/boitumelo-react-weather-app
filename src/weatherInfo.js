import react from "react";
import formatDate from "./formatDate";

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
            
        <img src={weatherData.iconUrl}
        alt={weatherData.description}
        className="float-left"
        />
        <div className="float-left">
       <span className="temperature">{Math.round(weatherData.temperature)}</span> 
       <span className="unit">°C</span>
      </div>
      <div>
    </div>
    <div className="col-6">
        <ul>
        <li>{props.data.humidity} </li>
        <li>Precipitation: 35% </li>
        <li>{props.data.wind} </li>
        </ul>
    </div>
</div>
</div>
    );
    
}