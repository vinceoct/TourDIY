import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Button, Card } from 'react-bootstrap'
import axios from 'axios'

const VenueCards = ({ selectedState, selectedCity }) => {
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
    <Container>
      
        {venues.map((venue) => (    
            <Card className='m-3'>
              <Card.Body>
                <Card.Title>{venue.name}</Card.Title>
                <Button className='custsecondary'>More Info</Button>
              </Card.Body>
            </Card>         
        ))}
      
    </Container>
  );
};

export default VenueCards;