import React, { useCallback, useEffect } from 'react';
import { useGlobalContext } from '../../../context';
import moment from 'moment'
import ShortTermWeather from './subcomponentsweather/shorttermweather';
import LongTermWeather from './subcomponentsweather/longtermweather';

const urlWeather = "https://api.met.no/weatherapi/locationforecast/2.0/compact?"

function YRWeather() {
    const {succesfulFetchIP,fetchDataIP ,setSuccesfulFetchWeather, setFetchDataWeather} = useGlobalContext();
    //const [showLongWeather, setShowLongWeather] = useState(false); 

    const findBreakPoint = (data) => {
        let i = 0;
        let breakPointWeather = 52;
        let timeDifference = 0;
        try {
            while (i < data.length) {
                let a = moment(data[i].time)
                let b = moment(data[i+1].time)
                timeDifference = b.diff(a,"hours")
                if (timeDifference===6) {
                    breakPointWeather = i;
                    i=data.length;
                }
                i++
            }
        } catch (error) {
            console.log(error)
        }
        return breakPointWeather
    }

    const getWeatherData = useCallback( async () => {
        try {
            //API call
            const url = `${urlWeather}lat=${fetchDataIP.lat.toFixed(4)}&lon=${fetchDataIP.lon.toFixed(4)}`;
            //console.log(url)
            const response = await fetch( url );
            if (!response.ok || (response.status!==200)) {
                throw new Error("HTTP status" + response.status + " "+ response.statusText)
            }
            //console.log(response);
            const data = await response.json();
            //console.log(data);
            
            // Process the data and extract when it goes from hourly to long term (6h gap)
            const breakPointWeather = findBreakPoint(data.properties.timeseries)

            //console.log(data.properties.timeseries)
            setFetchDataWeather([data.properties.timeseries , breakPointWeather])
            setSuccesfulFetchWeather(true);
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setSuccesfulFetchWeather(false);
                setFetchDataWeather("Adblock");
            }
            console.log(error)
            setSuccesfulFetchWeather(false);
        }
    },[fetchDataIP,setFetchDataWeather,setSuccesfulFetchWeather])

    useEffect(()=>{
        if ( succesfulFetchIP === true ){
            getWeatherData();
        }
    },[succesfulFetchIP,getWeatherData])


    return (
        <div className="card" style={{width:"90%"}}>
            <ShortTermWeather />
            <LongTermWeather />
        </div>
        
    )
}


export default YRWeather;
