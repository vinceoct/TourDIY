import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap/'

export default function Topnav () {
    return(
        <Navbar expand='lg'>
            <Container fluid>
                <Navbar.Brand href='/'>Tour DIY</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav className='ml-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='venues'>Venues</Nav.Link>
                        <Nav.Link href='bands'>Bands</Nav.Link>
                        <NavDropdown title='Account' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='profile'>View Profile</NavDropdown.Item>
                            <NavDropdown.Item href='update'>Update Profile</NavDropdown.Item>
                            <NavDropdown.Item href='something'>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>Log Out</NavDropdown.Item>
                        </NavDropdown>
                        <div className='navbtn'>
                        <Button className='navbar-btn custprimary' href='login'>Login</Button>
                        <Button className='navbar-btn custprimary' href='signup'>Sign Up</Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    )
}
