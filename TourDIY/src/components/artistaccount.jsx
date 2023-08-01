import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/authprovider';
import { Form, Container, Card, Button, Row, Col } from 'react-bootstrap/'
export default function ArtistAccount () {
  const { logout, user } = useContext(AuthContext);
  console.log(user)
  console.log(user.email)
  const handleLogout = () => {
      logout();
  };

  const getProfilePage = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/artists/${user.email}`)
                const data = response.data
                setEmail(data.email);
                setName(data.name);
                setGenre(data.genre);
                setCity(data.city);
                setState(data.state);
                setTwitter(data.twitter);
                setInstagram(data.instagram);
                setSpotify(data.spotify);
                setBandcamp(data.bandcamp);
                setSoundcloud(data.soundcloud);
            } catch (error) {
                console.error('Error fetching user', error)
            }
        }
  useEffect(()=> {
        if (user.email) {
        getProfilePage()
        }
    }, [user.email])

    const [email, setEmail] = useState(user.email)
    const [name, setName] = useState(user.name)
    const [genre, setGenre] = useState(user.genre)
    const [city, setCity] = useState(user.city)
    const [state, setState] = useState(user.state)
    const [twitter, setTwitter] = useState(user.twitter)
    const [instagram, setInstagram] = useState(user.instagram)
    const [spotify, setSpotify] = useState(user.spotify)
    const [bandcamp, setBandcamp] = useState(user.bandcamp)
    const [soundcloud, setSoundcloud] = useState(user.soundcloud)
    const [success, setSuccess] = useState(false)
    
    const handleProfileUpdate = async () => {
        try {
           const response = await axios.put(`http://localhost:3001/api/artists/${user.email}`,
           {
            name: name,
            genre: genre,
            city: city,
            state: state,
            twitter: twitter,
            instagram: instagram,
            spotify: spotify,
            bandcamp: bandcamp,
            soundcloud: soundcloud,
            email: email,
          } )
          setSuccess(true)

    } catch (error) {
        console.error('Error updating user', error)
    }}

       const handleDelete = async () => {
        try { 
            await axios.delete(`http://localhost3001/api/artists/${user.email}`,)
            setSuccess(true)
            handleLogout()
        } catch (error) {
            console.error('Error deleting user', error)
        }
    }

 return (
    <Container className="section d-flex flex-column justify-content-center">
      <Card className="accountinfo d-flex flex-column justify-content-around" style={{height: '80%', width: '90%', background: 'none', border: 'none'}}>
        <Card.Title className='text-center' style={{fontSize: '30px'}}>Account</Card.Title>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Row className="d-flex flex-row">
            <Col md={2} className='align-items-center'>
            <p>
              <strong>Name:</strong>
            </p>
            </Col>
            <Col md={8} className="userupdate">
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              </Col>
              <Col>
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
              </Button>
              </Col>
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
            <p>
              <strong>Email:</strong>
            </p>
            </Col>
            <Col md={8} className="userupdate">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </Col>
              <Col>
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
              </Button>
              </Col>
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
            <p>
              <strong>Genre:</strong>
            </p>
            </Col>
            <Col md={8} className="userupdate">
              <Form.Control
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
              </Col>
              <Col>
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
              </Button>
              </Col>
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
            <p>
              <strong>City:</strong>
            </p>
            </Col>
            <Col md={8}className="userupdate">
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              </Col>
              <Col>
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
              </Button>
              </Col>
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
            <p>
              <strong>State:</strong>
            </p>
            </Col>
            <Col md={8}className="userupdate">
              <Form.Control
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              </Col>
              <Col> 
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
              </Button>
              </Col>
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
            <p>
              <strong>Twitter:</strong>
            </p>
            </Col>
            <Col md={8} className="userupdate">
              <Form.Control
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
              </Col>
              <Col>
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
              </Button>
              </Col>
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
            <p>
              <strong>Instagram:</strong>
            </p>
            </Col>
            <Col md={8} className="userupdate">
              <Form.Control
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
              </Col>
              <Col >
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
              </Button>
              </Col>
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
            <p>
              <strong>Spotify:</strong>
            </p>
            </Col>
            <Col md={8} className="userupdate">
              <Form.Control
                type="text"
                value={spotify}
                onChange={(e) => setSpotify(e.target.value)}
              />
              </Col>
              <Col>
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
              </Button>
              </Col>
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
             <p>
              <strong>Bandcamp:</strong>
            </p>
            </Col>
            <Col md={8} className="userupdate">
              <Form.Control
                type="text"
                placeholder="Update Bandcamp"
                value={bandcamp}
                onChange={(e) => setBandcamp(e.target.value)}
            />
            </Col>
            <Col>
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
                Update
             </Button>
          </Col>    
          </Row>

          <Row className="accountinfo">
            <Col md={2}>
              <p>
              <strong>SoundCloud:</strong>
            </p>
            </Col>
            <Col md={8} className="userupdate">
              <Form.Control
                type="text"
                value={soundcloud}
                onChange={(e) => setSoundcloud(e.target.value)}
              />
              </Col>
              <Col>
              <Button className="custsecondary" type="submit" style={{width: '100%'}} onClick={handleProfileUpdate}>
              Update
              </Button>
              </Col>        
          </Row>

          <Row>
            <Col className='text-center'>
              <Button type="button" variant="danger" onClick={handleDelete}>
                Delete Profile
              </Button>
            </Col>
            <Col className='text-center'>
              <Button className="custsecondary" onClick={handleLogout}>
                Logout
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
