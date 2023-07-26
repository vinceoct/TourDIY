import React, { useState, useEffect } from 'react';
import axios from 'axios'

const VenueSelect = ({ selectedState, selectedCity }) => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    getVenues(selectedState, selectedCity).then(data => setVenues(data));
  }, [selectedState, selectedCity]);

const getVenues = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/api/venues/location/${selectedCity}/${selectedState}`)
        console.log(response.data)
        return response.data
    }catch (error) {
        console.error(error)
        return[]
    }
  }
  return (
    <div>
        {venues.map(venue => (
          <div>
            <h3>{venue.name}</h3>
            <p>{venue.city},{venue.state}</p>
          </div>
        ))}
    </div>
  );
};

export default VenueSelect;