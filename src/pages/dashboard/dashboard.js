import React from 'react';
import Container from 'react-bootstrap/Container';
//Left container coloumn
import SunRiseSet from "./components/sunriseset";
import IpLocation from './components/iplocation';
import YRWeather from './components/yrweather';
//Right container coloumn
import CryptoPrice from './components/cryptoprice';
import APOD from './components/APOD';

function Dashboard() {

    return (
        <Container fluid style={{paddingBottom:50, maxWidth:1400}} className="fullHeight gx-5">
            <div className="row">
                <div className="col-12 col-md-4 justify-content-center">
                    <YRWeather />
                </div>
            
                <div className="col-12 col-md-8 justify-content-center">
                    <CryptoPrice />
                    <div className="d-flex">
                        <IpLocation />
                        <SunRiseSet />
                    </div>
                    <APOD />
                </div>
            </div>
        </Container>
    ) 
}

export default Dashboard;