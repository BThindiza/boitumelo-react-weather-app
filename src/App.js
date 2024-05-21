import React from "react";
import Weather from "./Weather";
import "./App.css";

function App(){
  return(
   <div className="App">
    <div className="container">
    Weather App
   <Weather/>
    <footer>
      This project was coded by{""} <a href="https://www.linkedin.com/in/boitumelo-thindiza-222049159/" target="_blank"> Boitumelo Thindiza </a>{""} and is {""}
      <a href="https://github.com/BThindiza/boitumelo-react-weather-app" target="_blank"> Open-Sourced on Github </a>
    </footer>
   </div> 
   </div>
  );
}

export default App;