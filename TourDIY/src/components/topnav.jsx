import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap/'

export default function Topnav ({ scrollOnClick }) {

    return(
        <Navbar expand='lg'>
            <Container fluid>
                <Navbar.Brand onClick={() => scrollOnClick('home')}>Tour DIY</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav className='ml-auto navbar'>
                        <Nav.Link onClick={() => scrollOnClick('home')}>Home</Nav.Link>
                        <Nav.Link onClick={() => scrollOnClick('venues')}>Venues</Nav.Link>
                        <Nav.Link onClick={() => scrollOnClick('bands')}>Bands</Nav.Link>
                        <Nav.Link onClick={() => scrollOnClick('signup')} >Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    )
}
