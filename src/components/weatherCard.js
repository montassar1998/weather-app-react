import React, { useEffect } from "react";
import { useState } from "react";
import './weatherCard.css'
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
function WeatherCard(props) {
    const [City, setCity] = useState({})
    const [Weather, setWeather] = useState(props.dailyForecast)
    console.log("data = ", props)
    useEffect(() => {
        console.log("card ", props.data)
        console.log("data de card ", props.dailyForecast)
        setCity(props.cityName)
        setWeather(props.dailyForecast)
    }, [props.data, props.dailyForecast])
    console.log("literal briefing", props.dailyForecast)
    if (typeof props.dailyForecast === 'undefined') {
        return
    }
    var iconcode = props.dailyForecast.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    return (
        <div className="main container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
                        <div className="col-xs-6">
                            <h2 style={{ "text-align": "left", "padding": "20px" }}>{props.data.cityName}</h2>
                            <span style={{ "float": "right" }} id="icon"><img style={{ "width": "90px", "height": "90px" }} id="wicon" src={iconurl} alt="Weather icon" /></span>
                            <span style={{ "font-size": "40px" }}>{props.dailyForecast.weather[0].main}</span>
                        </div>
                        <div className="col-xs-6 text-center" style={{ "clear": "left" }}>
                            <div className="h1 temperature">
                                <span style={{ "font-size": "90px" }}>{parseInt(props.dailyForecast.temp.day)}°</span>
                                <small> {parseInt(props.dailyForecast.temp.min)}° / {parseInt(props.dailyForecast.temp.max)}°</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherCard;