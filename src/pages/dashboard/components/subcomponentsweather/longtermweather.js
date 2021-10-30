import React, { useState } from 'react';
import { useGlobalContext } from '../../../../context';
import WeatherCard from './weathercard';


function LongTermWeather() {
    const {fetchDataWeather,succesfulFetchWeather} = useGlobalContext();
    const [showLongWeather, setShowLongWeather] = useState(false); 

    return (
        <>
        <div className="border-bottom" style={{paddingTop:5, paddingBottom:5}}>
            <button className="btn btn-primary" onClick={()=>setShowLongWeather(!showLongWeather)}>
                {showLongWeather ? "Hide longterm":"Show longterm"}
            </button>
        </div>
        <div className="">
            {succesfulFetchWeather ? 
            (showLongWeather &&
                (fetchDataWeather[0].slice(fetchDataWeather[1],-1).map((data, index)=> <WeatherCard {...data} index={index} key={"short"+index} />)))
            : "Loading"}
        </div>
        </>
    )
}


export default LongTermWeather;