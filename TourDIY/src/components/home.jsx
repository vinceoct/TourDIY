import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap/'
import '../css/custom-bootstrap-colors.css'
import van from '../assets/van.png'

export default function Home () {
    return(
        <Container id='home' className='d-flex justify-content-center align-items-center' style={{ minHeight: '100%'}}>
           <Card className='homeCard'style={{ width: '80%', border: 'solid 1px white', background: 'transparent', textAlign: 'center'}}>
                    <Card.Body>
                    <Card.Title>You Don't Have to Do it ALL Yourself</Card.Title>
                    <Card.Text>
                        Welcome to TourDIY - a community driven database of bands and venues.   
                    </Card.Text>
                    <Button className="custsecondary" href='login'>Get Started</Button>
                </Card.Body>
            </Card>            
        </Container>
    )
}