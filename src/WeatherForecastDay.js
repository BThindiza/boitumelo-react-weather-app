import React from "react";
import WeatherIcon from "./WeatherIcon";




export default function WeatherForecastDay(props) {
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemp(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
     let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri" ,"Sat"];
     return days[day];

}


return(
    <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={40}/>
        <div className="WeatherForecast-Temperatures">
            <span className="Forecast-temp-max">
                {maxTemp()}
            </span>
            <span className="Forecast-temp-min">
                {minTemp()}
            </span>
        </div>
    </div>
);
}