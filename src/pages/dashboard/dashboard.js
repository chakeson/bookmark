import React from 'react';
import Container from 'react-bootstrap/Container';
//Left container coloumn
import SunRiseSet from "./components/sunriseset";
import IpLocation from './components/iplocation';
import YRWeather from './components/yrweather';
//Right container coloumn
import CryptoPrice from './components/cryptoprice';


function Dashboard() {

    return (
        <Container fluid style={{paddingBottom:50}} className="d-flex justify-content-center align-items-start">
            <div className="row d-inline-flex col-12 col-md-5 justify-content-center">
                <IpLocation />
                <SunRiseSet />
                <YRWeather />
            </div>
            <div className="row d-inline-flex col-12 col-md-7 justify-content-center">
                <CryptoPrice />

            </div>
        </Container>
    ) 
}

export default Dashboard;