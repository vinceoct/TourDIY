import React, { useContext } from 'react'
import { AuthContext } from '../context/authprovider';
import { Form, Container, Card, Button, Row, Col } from 'react-bootstrap/'
export default function ArtistAccount () {
    const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='section'>
      <p>account</p>
      <Button className='custsecondary' onClick={handleLogout}>Logout</Button>
    </div> )
}