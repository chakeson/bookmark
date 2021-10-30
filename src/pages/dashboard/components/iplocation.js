import React, { useCallback, useEffect } from 'react';
import { useGlobalContext } from '../../../context';
import Card from 'react-bootstrap/card'

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
        <Card className="col-6">
            <div style={{paddingTop:10,paddingLeft:10,paddingRight:10}}>IP address: {succesfulFetchIP ? fetchDataIP.ip : `Loading: ${fetchDataIP}`}</div>
            <div style={{paddingBottom:10,paddingLeft:10,paddingRight:10}}>Country: {succesfulFetchIP ? fetchDataIP.country : `Loading: ${fetchDataIP}`}</div>
        </Card>
        
    )
}


export default IpLocation;