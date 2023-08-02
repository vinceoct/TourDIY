import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'

const VenueCards = ({ selectedState, selectedCity }) => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    getvenues(selectedState, selectedCity).then((data) => setVenues(data));
  }, [selectedState, selectedCity]);

  const getvenues = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/venues/location/${selectedCity}/${selectedState}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <>
      {venues.map((venue, index) => (
        <div
          key={venue.id}
          className={`m-3 venue-card`}
        >
          <div className="card-front">
            <Card>
              <Card.Body>
                <Card.Title>{venue.name}</Card.Title>
                <a href={venue.website} target="_blank"><Button className="custsecondary" onClick={() => handleFlip(index)}>
                  Visit
                </Button></a>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
};

export default VenueCards;