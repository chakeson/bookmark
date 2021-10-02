import react, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const urlLocation = "https://geolocation-db.com/json/"
const urlSunData = "https://api.met.no/weatherapi/sunrise/2.0/.json?"

function SunRiseSet() {
    const [succesfulFetchIP, setsuccesfulFetchIP] = useState(false);
    const [succesfulFetchSun, setSuccesfulFetchSun] = useState(false);
    const [fetchDataIP, setfetchDataIP] = useState("");
    const [fetchDataSun, setfetchDataSun] = useState("");

    const getIP = async () => {
        try {
            //API call
            const response = await fetch(urlLocation)
            const data = await response.json()
            setfetchDataIP({lat:data.latitude,lon:data.longitude,ip:data.IPv4,country:data.country_name})
            setsuccesfulFetchIP(true);
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setfetchDataIP("Adblock")
                setsuccesfulFetchIP(false);
            }
            setSuccesfulFetchSun(false);
        }

    }

    useEffect(()=>{
        getIP()
    },[])
    
    const getSunData = async () => {
        try {
            // Find UTC ofset for api
            //const offset = new Date().getTimezoneOffset()/-60; in minutes
            const textOffSet = Date().slice(28,34)
            const offSet = textOffSet.slice(0,3)+":"+textOffSet.slice(3,5)
            //API call
            const url = `${urlSunData}lat=${fetchDataIP.lat}&lon=${fetchDataIP.lon}&date=${new Date().toISOString().slice(0, 10)}&offset=${offSet}`
            const response = await fetch(url)
            const data = await response.json()
            setSuccesfulFetchSun(true);
            setfetchDataSun({sunrise:data.location.time[0].sunrise.time, sunset:data.location.time[0].sunset.time})
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setSuccesfulFetchSun(false);
                setfetchDataIP("Adblock");
            }
            console.log(error)
            setSuccesfulFetchSun(false);
        }
    }

    useEffect(()=>{
        if ( succesfulFetchIP === true ){
            getSunData()
        }
    },[succesfulFetchIP])


    return (
        <Container>
            <div>
                <div>Sunrise: {succesfulFetchSun ? fetchDataSun.sunrise.slice(11,16) : `loading: ${fetchDataSun}` }</div>
                <div>Sunset: {succesfulFetchSun ? fetchDataSun.sunset.slice(11,16) : `Loading: ${fetchDataSun}`} </div>
                <div>IP addres: {succesfulFetchIP ? fetchDataIP.ip : `Loading: ${fetchDataIP}`}</div>
                <div>Country: {succesfulFetchIP ? fetchDataIP.country : `Loading: ${fetchDataIP}`}</div>
            </div>
        </Container>
    )
}


export default SunRiseSet;



/*


    console.log("1")
    if (succesfulFetchIP === true) {
        console.log("2")
        if (succesfulFetchSun === true) {
            console.log("3")
            return (
                <Container>
                    <div>
                        <div>Sunrise:{fetchDataSun.sunrise}</div>
                        <div>Sunset:{fetchDataSun.sunset}</div>
                        <div>ip addres:{fetchDataIP.ip}</div>
                        <div>country:{fetchDataIP.country}</div>
                    </div>
                </Container>
            )
        } else {    
            console.log("4")    
            return (
                <Container>
                    <div>
                        <div>ip addres:{fetchDataIP.ip}</div>
                        <div>country:{fetchDataIP.country}</div>
                    </div>
                </Container>
            )
        }
    }
    console.log("5")
    if (fetchDataIP==="Adblock") {
        console.log("6")
        return (
            <Container>
                <div>Blocked by adblocker.</div>
            </Container>
        )
    }
    if (fetchDataIP==="") {
        console.log("7")
        return (
            <Container>
                <div>Loading</div>
            </Container>
        )
    }
    console.log("8")


*/