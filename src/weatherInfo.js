import React from "react";
import formatDate from "./formatDate"
import weatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-6">
<h1>{props.data.city}</h1>
<ul>
    <li><formatDate date= {props.data.date}/>,
{props.data.description}</li>
<li>Humidity:<strong>{props.data.humidity}%</strong> , Wind:{" "}<strong>{props.data.wind}Km/h</strong></li>
</ul>
</div>
<div className="col-lg-6 col-md-6 col-sm-8">
        <div className="temperature d-flex justify-content-end">
         <weatherIcon code={props.data.icon} size={52}/>   
            <div>
        <div>
            <span className="temperature">
                {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
        </div>
      <div>
    </div>

    </div>
</div>
</div>
</div>
</div>
    );
    
}