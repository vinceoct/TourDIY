import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap/'
import '../css/custom-bootstrap-colors.css'


const Home = React.forwardRef((props, ref) => {
  

    return(
        <Container ref={ref} id='home' className='d-flex justify-content-center align-items-center section' style={{ minHeight: '100%'}}>
           <Card className='homeCard'style={{ width: '80%', border: 'none', background: 'transparent', textAlign: 'center'}}>
                    <Card.Body>
                    <Card.Title>You Don't Have to Do it ALL Yourself</Card.Title>
                    <Card.Text>
                        Welcome to TourDIY - a community driven database of bands and venues.   
                    </Card.Text>
                    <Button onClick={() => props.scrollOnClick('signup')} className="custsecondary">Get Started</Button>
                </Card.Body>
            </Card>            
        </Container>
    )
})

export default Home