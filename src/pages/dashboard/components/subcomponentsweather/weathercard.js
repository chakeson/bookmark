import React from 'react';
import moment from 'moment'
import WeatherSVGData from "./weatherSVGdata"
import { BiError } from "react-icons/bi";

function WeatherCard({data,time}) {
    //console.log(data);
    //console.log(time);

    //Display time and if 00:00 display day and time.
    var dateTimeText = "Loading";
    if (time.slice(11,13) === "00") {
        const dateMoment = moment(time);
        const dayNr = dateMoment.day();
        const day = ["filler","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayNr];
        dateTimeText = day + " " + time.slice(11,16);
    } else {
        dateTimeText = time.slice(11,16);
    }

    var icon;
    if (data.hasOwnProperty("next_1_hours")) {
        icon = WeatherSVGData[0][data.next_1_hours.summary.symbol_code];
    }
    else if (data.hasOwnProperty("next_6_hours")) {
        icon = WeatherSVGData[0][data.next_6_hours.summary.symbol_code];
    }
    else {
        icon = <BiError />
    }


    return (
        <div className="d-flex flex-row border-bottom">
            <div style={{paddingRight:10}}> {/* Time in day and weekday*/}
                {dateTimeText}
            </div>
            <div style={{paddingRight:10}}> {/*Temperature*/}
                {data.instant.details.air_temperature}c 
            </div>
            <div style={{paddingRight:10, width:"3em"}}> {/*Weather svg icon*/}
                {icon}
            </div>
            <div style={{paddingRight:10}}> {/*Wind speed*/}
                {data.instant.details.wind_speed}m/s
                {/*WeatherSVGData[0][data.next_1_hours.summary.symbol_code]*/}
            </div>
        </div>
        
    )
}


export default WeatherCard;