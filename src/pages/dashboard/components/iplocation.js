import React, { useCallback, useEffect } from 'react';
import { useGlobalContext } from '../../../context';


const urlLocation = "https://geolocation-db.com/json/"


function IpLocation() {
    const {fetchDataIP,setfetchDataIP,succesfulFetchIP,setSuccesfulFetchIP} = useGlobalContext();


    const getIP = useCallback( async () => {
        try {
            //API call
            const response = await fetch(urlLocation)
            const data = await response.json()
            setfetchDataIP({lat:data.latitude,lon:data.longitude,ip:data.IPv4,country:data.country_name})
            setSuccesfulFetchIP(true);
            //console.log(data);
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setfetchDataIP("Adblock")
                setSuccesfulFetchIP(false);
            } else {
                console.log(error)
            }
            //const {setSuccesfulFetchIP} = useGlobalContext;
            setSuccesfulFetchIP(false);
        }

    },[setSuccesfulFetchIP,setfetchDataIP])

    useEffect(()=>{
        getIP()
    },[getIP])
    

    return (
        <div className="card" style={{width:"90%"}}>
            <div>IP address: {succesfulFetchIP ? fetchDataIP.ip : `Loading: ${fetchDataIP}`}</div>
            <div>Country: {succesfulFetchIP ? fetchDataIP.country : `Loading: ${fetchDataIP}`}</div>
        </div>
        
    )
}


export default IpLocation;