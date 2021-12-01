import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Error() {
    return (
        <Container fluid className="fullHeight">
            <div className="bodyFull d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center fs-1">

                        <div>404</div>
                        <div className="block"></div>
                        <div>Head <Link to="/" style={{color:"var(--font-color)"}}>home</Link></div>

                </div>
            </div>
        </Container>
    ) 
}

export default Error;