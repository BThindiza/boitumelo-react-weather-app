import React , {useState} from "react";
import WeatherInfo from "./weatherInfo";
import axios  from "axios";
import "./Weather.css";


export default function weather(props){
     let [weatherData,setWeatherData] = useState({ready: false});
    function handleResponse(response){
        setReady(true);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
        icon:response.data.weather[0].icon,
            date: new Date (response.data.dt*1000),
            wind: response.data.wind.speed,
            city:response.data.name
        });
        
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleCityChange(event){
        setCity(event.target.value);
    }
    
    function search(){
        let apiKey ="6ee72f51667c1ac4a6bc6bfa1cc12d42";
        let city = "Polokwane";
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready){
    return(
<div className="weather">
<form onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-5">
    <input type="search" placeholder="Search City" className="form-city" autoFocus="on" onChange={handleCityChange}/>
    </div>
    <div className="col-6">
    <input type="Submit" value="Search" className="btn btn-primary w-98"/>
    </div>
    </div>
</form>
<WeatherInfo data={weatherData}/>
    </div>
);
    }else {
search();
return "Loading Data....";

}
}
