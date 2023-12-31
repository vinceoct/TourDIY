import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/authprovider'
import { Container, Button, Row, Col } from 'react-bootstrap/'
import StateSelect from './stateselect'
import CitySelect from './cityselect'
import ArtistCards from './artistcards'

const Bands = React.forwardRef((props, ref) => {
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
        <div ref={ref} className='section' id='artists'>
          {loggedIn ? (
            <Container className='text-center'>
              <h1>Find Bands</h1>
              <Row>
                <Col>  
                  <StateSelect onSelectState={handleSelectState}/>
                </Col>
                <Col>
                  <CitySelect selectedState={selectedState} onSelectCity={handleSelectCity}/> 
                </Col>
              </Row>
              {selectedState && selectedCity && (
              <ArtistCards selectedState={selectedState} selectedCity={selectedCity}/>)}
            </Container>
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

export default Bands