import React from "react";
import "./Weather.css";


export default function Weather(){
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
<h1>Polokwane</h1>
<ul>
    <li>Tuesday 12:47</li>
    <li>Sunny</li>
</ul>
<div className="row">
    <div className="col-6">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=" alt="Sunny"/>
       <span className="temperature">12</span> 
       <span className="unit">°C</span>
    </div>
    <div className="col-6">
        <ul>
        <li>Humidty: 20% </li>
        <li>Precipitation: 35% </li>
        <li>Wind: 8 Km/h </li>
        </ul>
    </div>
</div>
</div>
);
}