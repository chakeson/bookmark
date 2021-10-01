import react from 'react';
import { Link } from 'react-router-dom'
//import {Navbar, Nav,NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css"
import { IoBookmarksOutline} from "react-icons/io5" // ,IoBookmarks,IoBookmarksSharp <IoBookmarks /><IoBookmarksSharp />
//import { IoBookmarksOutline } from "react-icons/io5";


function TopNavbarComponent() {
    return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Container>
        <Nav.Link as={Link} to="/"><Navbar.Brand><IoBookmarksOutline /></Navbar.Brand></Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default TopNavbarComponent;

/*

    <Navbar bg="dark" expand="md">
    <Container>
        <Navbar.Brand href="#home"><IoBookmarksOutline /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>

*/