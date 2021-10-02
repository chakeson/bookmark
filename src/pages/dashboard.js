import react from 'react';
import { Container,row } from 'react-bootstrap';
import SunRiseSet from "../components/sunriseset"

function Dashboard() {

    return (
        <Container>
            <div className="row">
                <SunRiseSet />
            </div>
        </Container>
    ) 
}

export default Dashboard;