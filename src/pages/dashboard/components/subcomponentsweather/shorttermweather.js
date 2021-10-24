import React from 'react';
import { useGlobalContext } from '../../../../context';
import WeatherCard from './weathercard';



function ShortTermWeather() {
    const {fetchDataWeather,succesfulFetchWeather} = useGlobalContext();
    //console.log(fetchDataWeather)



    return (
        <div className="flex flex-col">
            {succesfulFetchWeather ? 
            fetchDataWeather[0].slice(0,fetchDataWeather[1]).map((data, index)=> <WeatherCard {...data} key={"short"+index} />)
            :"Loading"}
        </div>
        
    )
}


export default ShortTermWeather;