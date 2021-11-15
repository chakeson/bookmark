import React, { useEffect, useState } from 'react';
import moment from 'moment'
import WeatherSVGData from "./weatherSVGdata"
import { BiError } from "react-icons/bi";

function WeatherCard({data,time,index,mode}) {
    const [showDay, setShowDay] = useState(false);
    const [day, setDay] = useState("");
    const [clock, setClock] = useState("Loading");
    //console.log(data);
    //console.log(time);
    //console.log(index)
    //console.log(mode)

    //Display time and if 00:00 display day and time.
    //var dateTimeText = "Loading";
    useEffect(()=>{
        if (time.slice(11,13) === "00"  || (index===0)) {
            const dateMoment = moment(time);
            const dayNr = dateMoment.day();
            const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayNr];          
            setClock(time.slice(11,16));
            setDay(day);
            setShowDay(true);
        } else {
            setClock(time.slice(11,16));
        }
    },[time,index])


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
        <div className="d-flex flex-column">
            {!(mode==="long" && index===0 && !(time.slice(11,13) === "00")) &&(showDay) && <div style={{paddingTop:20}}>
                    {day}
                    <hr />
                </div>}
            <div className="d-flex justify-content-evenly">
                <div style={{width:40,color:"grey",fontSize:14,fontWeight:300, alignSelf:"center"}}> {/* Time in day and weekday*/}
                    {clock}
                </div>
                <div style={{width:60, alignSelf:"center", fontWeight:500}}> {/*Temperature*/}
                    {data.instant.details.air_temperature} <span style={{color:"grey",fontSize:14,fontWeight:300}}>c</span>
                </div>
                <div style={{width:"3em"}}> {/*Weather svg icon*/}
                    {icon}
                </div>
                <div style={{width:60, alignSelf:"center", fontWeight:500}}> {/*Wind speed*/}
                    {data.instant.details.wind_speed} <span style={{color:"grey",fontSize:14,fontWeight:300}}>m/s</span>
                </div>
            </div>
        </div>
        
    )
}


export default WeatherCard;