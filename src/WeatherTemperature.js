import React from "react";

export default function WeatherTemperature(props){
    return(
        <div className="WeatherTemperature">
       <span className="temperature">{Math.round(weatherData.temperature)}</span> 
       <span className="unit">°C</span>
      </div>

    );
}