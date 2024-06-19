import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    function formatWind(){
        if (props.unit === "celsius"){
            return `${Math.round(props.data.wind)} Km/h`;
        } else{
            return `${Math.round(props.data.wind * 0.62)} mph`;
        }
        }
    }
    return(
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-6">
<h1>{props.data.city}</h1>
<ul>
    <li><FormatDate date= {props.data.date}/>,
{props.data.description}</li>
<li className="humidity">Humidity:<strong>{props.data.humidity}%</strong> </li>
<li className="wind"><strong>Wind:{formatWind()}</strong></li>
</ul>
</div>
<div className="col-lg-6 col-md-6 col-sm-8">
        <div className="temperature-container d-flex justify-content-end">
         <WeatherIcon code={props.data.icon} size={52}/>   
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