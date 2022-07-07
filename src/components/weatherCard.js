import React, { useEffect } from "react";
import { API_KEY } from './../apis/WeatherApi';
import { useState } from "react";
import './weatherCard.css'
import DetailedForecast from './DetailedForecast';
import CloudIcon from '@mui/icons-material/Cloud';



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
        return (<p>Card will show up here !</p>)
    }
    var iconcode = props.dailyForecast.weather[0].icon;

    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    //ternary for weather icons
    return (
        <div className="main container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
                        <div className="col-xs-6">
                            <h2>{props.data.cityName}</h2>
                            <p className="h3"><i ></i>                        <span id="icon"><img id="wicon" src={iconurl} alt="Weather icon" /></span>
                                {props.dailyForecast.weather[0].main}</p>
                        </div>
                        <div className="col-xs-6 text-center">
                            <div className="h1 temperature">
                                <span>{parseInt(props.dailyForecast.temp.day)}°</span>
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