import react from 'react';
import { Container } from 'react-bootstrap';
import SunRiseSet from "./components/sunriseset"
import IpLocation from './components/iplocation';

function Dashboard() {

    return (
        <Container>
            <div className="row d-inline-flex">
                <IpLocation />
                <SunRiseSet />
            </div>
        </Container>
    ) 
}

export default Dashboard;