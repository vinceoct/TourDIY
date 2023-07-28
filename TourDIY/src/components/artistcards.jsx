import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
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
          <div>
            <h3>{artist.name}</h3>
            <p>{artist.genre}</p>
            <Button className='custsecondary '>View Profile</Button>
          </div>
        ))}
    </div>
  );
};

export default ArtistCards;