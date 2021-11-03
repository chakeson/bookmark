import React, { useState } from 'react';
import { Link } from 'react-router-dom'
//import {Navbar, Nav,NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css"
import { IoBookmarksOutline} from "react-icons/io5" // ,IoBookmarks,IoBookmarksSharp <IoBookmarks /><IoBookmarksSharp />
//import { IoBookmarksOutline } from "react-icons/io5";
import DropDownNav from './subcomponentnavbar/dropdownnav';

function TopNavbarComponent() {
    const [ searchText, setSearchText] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchText(e.target.value)
    }

    return (
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Container>
        <Nav.Link as={Link} to="/"><Navbar.Brand><IoBookmarksOutline /></Navbar.Brand></Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Form onSubmit={(e)=>{e.preventDefault();}}>
                        <FormControl onChange={(e)=>handleSearch(e)} value={searchText} type="text" placeholder="Search"/>
                        <Dropdown>
                            <ul class={`dropdown-menu ${searchText==="" ? "":"show"}`}>
                                <DropDownNav text={searchText}/>
                            </ul>
                        </Dropdown>
                    </Form>
                </Nav>
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