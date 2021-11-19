import React, { useCallback, useEffect } from 'react';
import { useGlobalContext } from '../../../context';
import Card from 'react-bootstrap/Card'

const urlSunData = "https://api.met.no/weatherapi/sunrise/2.0/.json?"

function SunRiseSet() {
    const {succesfulFetchIP,fetchDataIP,fetchDataSun,setfetchDataSun,succesfulFetchSun,setSuccesfulFetchSun} = useGlobalContext();
 

    const getSunData = useCallback( async () => {
        try {
            // Find UTC ofset for api
            //const offset = new Date().getTimezoneOffset()/-60; in minutes
            const textOffSet = Date().slice(28,34)
            const offSet = textOffSet.slice(0,3)+":"+textOffSet.slice(3,5)
            //API call
            const url = `${urlSunData}lat=${fetchDataIP.lat}&lon=${fetchDataIP.lon}&date=${new Date().toISOString().slice(0, 10)}&offset=${offSet}`
            const response = await fetch(url)
            const data = await response.json()
            //console.log(data);
            setfetchDataSun({sunrise:data.location.time[0].sunrise.time, sunset:data.location.time[0].sunset.time})
            setSuccesfulFetchSun(true);
            //console.log(fetchDataSun)
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setSuccesfulFetchSun(false);
                setfetchDataSun("Adblock");
            }
            console.log(error)
            setSuccesfulFetchSun(false);
        }
    },[fetchDataIP,setSuccesfulFetchSun,setfetchDataSun])

    useEffect(()=>{
        if ( succesfulFetchIP === true ){
            getSunData();
        }
    },[succesfulFetchIP,getSunData])


    return (
        <Card className="col-6">
            <div style={{paddingTop:10,paddingLeft:10,paddingRight:10}}>Sunrise: {succesfulFetchSun ? fetchDataSun.sunrise.slice(11,16) : `loading: ${fetchDataSun}` }</div>
            <div style={{paddingBottom:10,paddingLeft:10,paddingRight:10}}>Sunset: {succesfulFetchSun ? fetchDataSun.sunset.slice(11,16) : `Loading: ${fetchDataSun}`} </div>
        </Card>
        
    )
}


export default SunRiseSet;
