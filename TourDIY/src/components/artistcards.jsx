import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import bandcamp from '../assets/bandcamp.png'
import soundcloud from '../assets/soundcloud.png'
import spotify from '../assets/spotify.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

const ArtistCards = ({ selectedState, selectedCity }) => {
  const [artists, setArtists] = useState([]);
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  useEffect(() => {
    getArtists(selectedState, selectedCity).then((data) => setArtists(data));
  }, [selectedState, selectedCity]);

  const getArtists = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/artists/location/${selectedCity}/${selectedState}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleFlip = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  return (
    <>
      {artists.map((artist, index) => (
        <div
          key={artist.id}
          className={`m-3 artist-card ${flippedCardIndex === index ? 'flipped' : ''}`}
        >
          <div className="card-front">
            <Card className='text-center'> 
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Card.Text>{artist.genre}</Card.Text>
                <Button className="custsecondary" onClick={() => handleFlip(index)}>
                  More Info
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="card-back">
            <Card className='text-center'>
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <Card.Text className='mb-0'>Connect & Listen:</Card.Text>
                <Row> 
                    <Col md={2}> <a href={artist.instagram} target="_blank"><Card.Img src={instagram} style={{width: '48px'}}/></a></Col>
                    <Col md={2}> <a href={artist.twitter} target="_blank"><Card.Img src={twitter} style={{width: '48px'}}/></a></Col>
                    <Col md={2}> <a href={artist.spotify} target="_blank"><Card.Img src={spotify}style={{width: '48px'}}/></a></Col>
                    <Col md={2}> <a href={artist.bandcamp} target="_blank"><Card.Img src={bandcamp} style={{width: '48px'}}/></a></Col>
                    <Col md={2}> <a href={artist.soundcloud} target="_blank"><Card.Img src={soundcloud} style={{width: '48px'}}/></a></Col>
                </Row>
                <Button className="custsecondary" onClick={() => handleFlip(index)}>
                  Go Back
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArtistCards;