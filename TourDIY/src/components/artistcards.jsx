import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'

const ArtistCards = ({ selectedState, selectedCity }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists(selectedState, selectedCity).then(data => setArtists(data));
  }, [selectedState, selectedCity]);

const getArtists = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/api/artists/location/${selectedCity}/${selectedState}`)
        console.log(response.data)
        return response.data
    }catch (error) {
        console.error(error)
        return[]
    }
  }
  return (
    <div>
        {artists.map(artist => (
          <Card className='m-3'>
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Card.Text>{artist.genre}</Card.Text>
                <Button className='custsecondary'>More Info</Button>
              </Card.Body>
            </Card>   
        ))}
    </div>
  );
};

export default ArtistCards;