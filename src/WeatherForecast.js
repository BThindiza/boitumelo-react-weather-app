import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherForecast(props){
 let [loaded, setLoaded]= useState(false);
 let [forecast, setForecast]=useState(null);

 useEffect(() =>{
    setLoaded(false);
 }, [props.coordinates]);
 }
 
 function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
 }
 function load(){
    let apiKey ="6ee72f51667c1ac4a6bc6bfa1cc12d42";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
 }
 if(loaded){
    return(
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast,index){
                    if(index<5){
                        return(
                            
                        )
                    }
                })}
            </div>
        </div>
    )
 }
}