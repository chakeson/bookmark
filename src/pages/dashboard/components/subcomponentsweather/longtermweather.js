import React, { useState } from 'react';
import { useGlobalContext } from '../../../../context';
import WeatherCard from './weathercard';


function LongTermWeather() {
    const {fetchDataWeather,succesfulFetchWeather} = useGlobalContext();
    const [showLongWeather, setShowLongWeather] = useState(false); 

    return (
        <>
        {!showLongWeather && <div>
            <div className="d-grid">
            <button className="btn btn-primary btn-m" onClick={()=>setShowLongWeather(!showLongWeather)}>
                Show longterm
            </button>
            </div>
        </div>}

        <div className="">
            {succesfulFetchWeather ? 
            (showLongWeather &&
                (fetchDataWeather[0].slice(fetchDataWeather[1],-1).map((data, index)=> <WeatherCard {...data} index={index} mode="long" key={"long"+index} />)))
            : "Loading"}
        </div>

        {showLongWeather && <div>
            <div className="d-grid">
            <button className="btn btn-primary btn-m" onClick={()=>setShowLongWeather(!showLongWeather)}>
                Hide longterm
            </button>
            </div>
        </div>}
        </>
    )
}


export default LongTermWeather;