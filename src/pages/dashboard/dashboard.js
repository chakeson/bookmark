import react from 'react';
import { Container } from 'react-bootstrap';
import SunRiseSet from "./components/sunriseset";
import IpLocation from './components/iplocation';
import YRWeather from './components/yrweather';

function Dashboard() {

    return (
        <Container>
            <div className="row d-inline-flex col-12 col-md-6">
                <IpLocation />
                <SunRiseSet />
                <YRWeather />
            </div>
            <div className="row d-inline-flex col-12 col-md-6">

            </div>
        </Container>
    ) 
}

export default Dashboard;