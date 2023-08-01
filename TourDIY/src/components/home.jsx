import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap/'
import '../css/custom-bootstrap-colors.css'


const Home = React.forwardRef((props, ref) => {
  

    return(
        <Container ref={ref} id='home' className='d-flex justify-content-center align-items-center section' style={{ minHeight: '100%'}}>
           <Card className='homeCard'style={{ width: '80%', border: 'none', background: 'transparent', textAlign: 'center'}}>
                    <Card.Body>
                    <h1>Welcome to TourDIY</h1>
                    <h5>a community driven database of bands and venues.</h5>
                    <Button onClick={() => props.scrollOnClick('signup')} className="custsecondary">Get Started</Button>
                </Card.Body>
            </Card>            
        </Container>
    )
})

export default Home