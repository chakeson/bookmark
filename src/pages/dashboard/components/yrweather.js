import react, { useCallback, useEffect, useState } from 'react';
import { useGlobalContext } from '../../../context';


const urlWeather = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60&lon=11" //"https://api.met.no/weatherapi/locationforecast/2.0/compact?"

function YRWeather() {
    const {succesfulFetchIP,fetchDataIP,fetchDataSun,setfetchDataSun,succesfulFetchSun,setSuccesfulFetchSun} = useGlobalContext();

    const getWeatherData = useCallback( async () => {
        try {
            //const sitename = "bookmark https://github.com/chakeson/bookmark"
            let h = new Headers({
                    'Content-Type': 'application/json',
                    'User-Agent': "bookmark https://github.com/chakeson/bookmark",
                })
            
            const requestOptions = {
                method: "get",
                mode: "no-cors",
                headers: h,
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                redirect: 'follow',
            }
            //API call
            const url = urlWeather;//`${urlWeather}lat=${fetchDataIP.lat}&lon=${fetchDataIP.lon}, 10)}`;
            const response = await fetch( url , requestOptions );
            console.log(response);
            const data = await response.json();
            console.log(data);
            //setfetchDataSun(data.properties.timeseries)
            //setSuccesfulFetchSun(true);
        } catch (error) {
            if (error.message === "Failed to fetch") {
                //setSuccesfulFetchSun(false);
                //setfetchDataSun("Adblock");
            }
            console.log(error)
            //setSuccesfulFetchSun(false);
        }
    },[fetchDataIP,setSuccesfulFetchSun,setfetchDataSun])

    useEffect(()=>{
        if ( succesfulFetchIP === true ){
            getWeatherData();
        }
    },[succesfulFetchIP])


    return (
        <div className="card">
            <div>Sunrise: {succesfulFetchSun ? fetchDataSun.sunrise.slice(11,16) : `loading: ${fetchDataSun}` }</div>
            <div>Sunset: {succesfulFetchSun ? fetchDataSun.sunset.slice(11,16) : `Loading: ${fetchDataSun}`} </div>
        </div>
        
    )
}


export default YRWeather;
