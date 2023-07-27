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
          <div id='venues'>
            <h1>Venues</h1>
            <StateSelect onSelectState={handleSelectState}/>
            {selectedState && (
            <CitySelect selectedState={selectedState} onSelectCity={handleSelectCity}/> )}
            {selectedState && selectedCity && (
            <VenueCards selectedState={selectedState} selectedCity={selectedCity}/>)}
          </div>
        ) : (
          <>
            <h1>Please Login or Sign Up</h1>
            <Button onClick={() => props.scrollOnClick('signup')} className='custsecondary'>Back</Button>
          </>
        )}
        </div>
    )
})

export default Venues