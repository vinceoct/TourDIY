import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/authprovider';
import { Form, Container, Card, Button, Row, Col } from 'react-bootstrap/'
export default function ArtistAccount () {
  const { logout, user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null)
  console.log(user)
  console.log(user.email)
  const handleLogout = () => {
      logout();
  };

  useEffect(()=> {
        const getProfilePage = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/artists/${user.email}`)
                const data = response.data
                
                setUserData(data)
            } catch (error) {
                console.error('Error fetching user', error)
            }
        }
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
    console.log(email)
    const handleProfileUpdate = async () => {
        try {
           const response = await axios.put(`https://localhost3001/api/artists/${user.email}}`,
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
            await axios.delete(`https://localhost3001/api/artists/${user.email}`,)
            setSuccess(true)
            handleLogout()
        } catch (error) {
            console.error('Error deleting user', error)
        }
    }

  return (
    <div className='section'>
      <div className='accountinfo'>
                <p><strong>Name: {name} </strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Name" 
                 onChange={(e) => setName(e.target.value)}></input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Email: {email} </strong></p>
                <div className='userupdate'>
                <input type="email" placeholder="Update Email" onChange={(e) => setEmail(e.target.value)}>
                </input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Genre: {genre} </strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Genre" onChange={(e) => setGenre(e.target.value)}> 
                </input>
            <button type="submit" onClick={handleProfileUpdate}>Update</button>
   
   </div>         </div>
            <div className='accountinfo'>
                <p><strong>City: {user.city} </strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update City" onChange={(e) => setCity(e.target.value)}>
                </input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>State: {user.state}</strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update State" onChange={(e) => setState(e.target.value)}>
                </input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Twitter: {user.twitter}</strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Twitter" onChange={(e) => setTwitter(e.target.value)}>
                </input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Instagram: {user.instagram}</strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Instagram" onChange={(e) => setInstagram(e.target.value)}>
                </input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Spotify: {user.spotify}</strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Spotify" onChange={(e) => setSpotify(e.target.value)}>
                </input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>Bandcamp: {user.bandcamp}</strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update Bandcamp" onChange={(e) => setBandcamp(e.target.value)}>
                </input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='accountinfo'>
                <p><strong>SoundCloud: {user.soundcloud}</strong></p>
                <div className='userupdate'>
                <input type="text" placeholder="Update SoundCloud" onChange={(e) => setSoundcloud(e.target.value)}>
                </input>
                <button type="submit" onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
            <div className='userbuttons'>
                <Button id='deleteaccount'type="button" className='danger' onClick={handleDelete}>Delete Profile</Button>
                <Button className='custsecondary' onClick={handleLogout}>Logout</Button>
            </div>
    </div> )
}