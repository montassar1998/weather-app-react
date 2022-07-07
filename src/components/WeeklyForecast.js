import React from "react";
import DetailedForecast from "./DetailedForecast";
import "./WeeklyForecast.css"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

function Weeklyforecast(props) {
    function rotLeft(array, n) {
        while (n) {
            array.push(array.shift());
            n--;
        }
        return array;
    }
    // var weekdays = new Array(7);
    // weekdays[0] = "Sunday";
    // weekdays[1] = "Monday";
    // weekdays[2] = "Tuesday";
    // weekdays[3] = "Wednesday";
    // weekdays[4] = "Thursday";
    // weekdays[5] = "Friday";
    // weekdays[6] = "Saturday";
    // let res = []
    // let today = new Date()
    // let day1 = today.getDay();
    // for(let i=0;i<7;i++){
    //     console.log("day 1 = ", weekdays[day1])
    //     res[i] = weekdays[day1]
    //     day1 = (day1+1) %7
    // }
    // console.log("final days  = ", res)

    console.log("the weekly forecast receives", props.weatherWeeklyData)
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    let today = new Date()
    let day1 = today.getDay();
    weekdays = rotLeft(weekdays,day1)
    console.log("methode 2 plus facile ", weekdays)
    return (
        <Accordion >
            {weekdays.map((d , key )=>{
                console.log("key", key)
                return <DetailedForecast dayForecast={props.weatherWeeklyData.daily[key]} dayName={d}></DetailedForecast>
            })}

        </Accordion>

    )
}
export default Weeklyforecast;