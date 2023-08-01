import React, { useState, useContext, useRef } from 'react'
import { AuthContext } from '../context/authprovider'
import { Container, Card, Button, Row, Col } from 'react-bootstrap/'
import StateSelect from './stateselect'
import CitySelect from './cityselect'
import VenueCards from './venuecards'

const Venues = React.forwardRef((props, ref) => {
   const { loggedIn } = useContext(AuthContext); 
   const [selectedState, setSelectedState] = useState('');
   const [selectedCity, setSelectedCity] = useState('');
   
   const handleSelectState = (stateValue) => {
    setSelectedState(stateValue);
    console.log(stateValue)
  }

  const handleSelectCity = (cityValue) => {
    setSelectedCity(cityValue)
  }
    return(
        <div ref={ref} className='section' id='venues'>
          {loggedIn ? (
          <div>
            <h1>Find Venues</h1>
            <Row>
              <Col>
                <StateSelect onSelectState={handleSelectState}/>
              </Col> 
              <Col>
                {selectedState && (
                <CitySelect selectedState={selectedState} onSelectCity={handleSelectCity}/> )}
              </Col>
            </Row>
            {selectedState && selectedCity && (
            <VenueCards selectedState={selectedState} selectedCity={selectedCity}/>)}
          </div>
        ) : (
          <Container className='text-center'>
            <Row>
              <Col>
                <h1>Please Login or Sign Up.</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={() => props.scrollOnClick('signup')} className='custsecondary'>Back</Button>
              </Col>
            </Row>
          </Container>
        )}
        </div>
    )
})

export default Venues