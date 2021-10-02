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
            const response = await fetch(urlLocation)
            const data = await response.json()
            console.log(data)
            setfetchDataIP({lat:data.latitude,lon:data.longitude,ip:data.IPv4,country:data.country_name})
            setsuccesfulFetchIP(true);
        } catch (error) {
            if (error.message === "Failed to fetch") {
                setsuccesfulFetchIP(false);
                setfetchDataIP("Adblock")
            }
            setSuccesfulFetchSun(false);
        }

    }

    useEffect(()=>{
        getIP()
    },[])
    
    const getSunData = async () => {
        try {
            const url = `${urlSunData}lat=${fetchDataIP.lat}&lon=${fetchDataIP.lon}&date=${new Date().toISOString().slice(0, 10)}&offset=+02:00`
            const response = await fetch(url)
            const data = await response.json()
            //console.log(data)
            setSuccesfulFetchSun(true);
            setfetchDataSun({sunrise:data.location.time.sunrise,sunset:data.location.time.sunset})
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
}

export default SunRiseSet;