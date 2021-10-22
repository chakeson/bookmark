import React, { useState } from 'react';
import { useGlobalContext } from '../../../../context';
import WeatherCard from './weathercard';


function LongTermWeather() {
    const {fetchDataWeather,succesfulFetchWeather} = useGlobalContext();
    const [showLongWeather, setShowLongWeather] = useState(false); 

    return (
        <div className="">
            <button className="btn btn-primary" onClick={()=>setShowLongWeather(!showLongWeather)}>
                {showLongWeather ? "Hide longterm":"Show longterm"}
            </button>
            {succesfulFetchWeather ? 
            (showLongWeather &&
                (fetchDataWeather[0].slice(fetchDataWeather[1],-1).map((data, index)=> <WeatherCard {...data} key={"short"+index} />)))
            : "Loading"}
        </div>
    )
}


export default LongTermWeather;