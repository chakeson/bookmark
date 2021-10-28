import React, { useEffect, useState } from 'react';
import moment from 'moment'
import WeatherSVGData from "./weatherSVGdata"
import { BiError } from "react-icons/bi";

function WeatherCard({data,time}) {
    const [showDay, setShowDay] = useState(false);
    const [day, setDay] = useState("");
    const [clock, setClock] = useState("Loading");
    //console.log(data);
    //console.log(time);
    
    //Display time and if 00:00 display day and time.
    //var dateTimeText = "Loading";
    useEffect(()=>{
        if (time.slice(11,13) === "00") {
            const dateMoment = moment(time);
            const dayNr = dateMoment.day();
            const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayNr];          
            setClock(time.slice(11,16));
            setDay(day);
            setShowDay(true);
        } else {
            setClock(time.slice(11,16));
        }
    },[time])


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
        <div className="d-flex flex-column border-bottom">
            {showDay && <div style={{textDecoration:"underline"}}>
                    {day}
                </div>}
            <div className="d-flex flex-row justify-content-start">
                <div style={{paddingRight:10}}> {/* Time in day and weekday*/}
                    {clock}
                </div>
                <div style={{paddingRight:10}}> {/*Temperature*/}
                    {data.instant.details.air_temperature + " c"} 
                </div>
                <div style={{paddingRight:10, width:"3em"}}> {/*Weather svg icon*/}
                    {icon}
                </div>
                <div style={{paddingRight:10}}> {/*Wind speed*/}
                    {data.instant.details.wind_speed+" m/s"}
                </div>
            </div>
        </div>
        
    )
}


export default WeatherCard;