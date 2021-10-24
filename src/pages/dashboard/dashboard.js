import React from 'react';
import { Container } from 'react-bootstrap';
//Left container coloumn
import SunRiseSet from "./components/sunriseset";
import IpLocation from './components/iplocation';
import YRWeather from './components/yrweather';
//Right container coloumn
import CryptoPrice from './components/cryptoprice';


function Dashboard() {

    return (
        <Container>
            <div className="row d-inline-flex col-12 col-md-6">
                <IpLocation />
                <SunRiseSet />
                <YRWeather />
            </div>
            <div className="row d-inline-flex col-12 col-md-6">
                <CryptoPrice />
            </div>
        </Container>
    ) 
}

export default Dashboard;