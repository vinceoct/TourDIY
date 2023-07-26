import React, { useState } from 'react'
import StateSelect from './stateselect'
import CitySelect from './cityselect'
import VenueCards from './venuecards'
const Venues = React.forwardRef((props, ref) => {
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
            <h1>Venues</h1>
            <StateSelect onSelectState={handleSelectState}/>
            {selectedState && (
            <CitySelect selectedState={selectedState} onSelectCity={handleSelectCity}/> )}
            {selectedState && selectedCity && (
            <VenueCards selectedState={selectedState} selectedCity={selectedCity}/>)}
        </div>
    )
})

export default Venues