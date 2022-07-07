import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import './DetailedForecast.css'

import 'react-accessible-accordion/dist/fancy-example.css';
import Weeklyforecast from './WeeklyForecast';

function DetailedForecast(props) {
    console.log("det daily forecast ", props.dayForecast)



    if (typeof props.dayForecast === 'undefined') {



        <h4>Your Weekly forecast will be available on demand !  </h4>
    } else {

        var iconcode = props.dayForecast.weather[0].icon;

        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        console.log("this is ", props.dayForecast, 'with rain ', props.dayForecast.rain)
        return (
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span id="icon"><img id="wicon" src={iconurl} alt="Weather icon" /></span>
                        {props.dayName} {props.dayForecast.weather[0].description}   {parseInt(props.dayForecast.temp.min)}° / {parseInt(props.dayForecast.temp.max)}°
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="wrapper">
                    <div className="item1 left">
                        <div><span>Pressure : </span> <b><span >{props.dayForecast.pressure}</span></b></div>
                        <div><span>clouds : </span><b> <span > {props.dayForecast.clouds} %</span></b></div>
                        <div><span>Rain : </span><b> <span >{typeof props.dayForecast.rain === 'undefined' ? 0 : props.dayForecast.rain} %</span></b></div>

                    </div>
                    <div className="item2 right">

                        <div><span>Humidity : </span> <b><span >{props.dayForecast.humidity} %</span></b></div>
                        <div><span>Wind speed : </span><b> <span >{props.dayForecast.wind_speed} m/s</span></b></div>
                        <div><span>Feels like : </span> <b><span >{props.dayForecast.feels_like.day} °C</span></b></div>

                    </div>
                </AccordionItemPanel>
                <div className="down">
                </div>
            </AccordionItem>

        )
    }


}
export default DetailedForecast;