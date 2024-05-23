import React , {useState} from "react";
import formatDate from "./formatDate";
import axios  from "axios";
import "./Weather.css";


export default function Weather(props){
    let [weatherData,setWeatherData] = useState({ready: false});
    function handleReseponse(response){
        setReady(true);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=" 
            date: new Date (response.data.dt*1000),
            wind: response.data.wind.speed,
            city:response.data.name
        });
        
    }
    
    let apiKey ="6ee72f51667c1ac4a6bc6bfa1cc12d42";
    let city = "Polokwane";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (weatherData.ready){
    return(
<div className="weather">
<form>
    <div className="row">
        <div className="col-5">
    <input type="search" placeholder="Search City" className="form-city" autoFocus="0"/>
    </div>
    <div className="col-6">
    <input type="Submit" value="Search" className="btn btn-primary w-98"/>
    </div>
    </div>
</form>
<h1>{weatherData.city}</h1>
<ul>
    <li><formatDate = {weatherData.date}/></li>
    <li>{weatherData.description}</li>
</ul>
<div className="row">
    <div className="col-6">
        <div className="clearfix">
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
        <li>{weatherData.humidity} </li>
        <li>Precipitation: 35% </li>
        <li>{weatherData.wind} </li>
        </ul>
    </div>
</div>
</div>
);
    }else {
let apiKey ="6ee72f51667c1ac4a6bc6bfa1cc12d42";
    let city = "Polokwane";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleReseponse);

return "Loading Data....";

}
