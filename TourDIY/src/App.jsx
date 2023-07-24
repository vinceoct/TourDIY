
import { Route, Routes } from 'react-router-dom'
import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/custom-bootstrap-colors.css'
import './css/App.css'
import './css/nav.css'
import './css/main.css'
// import './css/footer.css'
import Nav from './components/topnav'
import Home from './components/home'
import Bands from './components/bands'
// import BandPage from './bandpage'
import Venues from './components/venues'
// import VenuePage from './venuepage'
// import Login from './login'
// import Account from './account'
import SignUp from './components/signup'

function App() {
  const homeRef = useRef(null)
  const signupRef = useRef(null) 
  const venuesRef = useRef(null)
  const bandsRef = useRef(null)
    
  const scrollToSection = (elementRef) => {
      if (elementRef && elementRef.current) {
          elementRef.current.scrollIntoView({ behavior: 'smooth'})
      }
    }
   const scrollOnClick = (section) => {
        switch (section) {
            case 'home':
                scrollToSection(homeRef)
                break
            case 'venues':
                scrollToSection(venuesRef)
                break
            case 'bands':
                scrollToSection(bandsRef)
                break
            case 'signup':
                scrollToSection(signupRef)
                break
            default:
                break
        }
    }
  return(
    <div className='app'>
      <div className='navCont'>
        <Nav scrollToSection={scrollToSection} scrollOnClick={scrollOnClick} homeRef={homeRef} venuesRef={venuesRef} bandsRef={bandsRef} signupRef={signupRef}/>
      </div>
      <div className='main'>
        <Home ref={homeRef} scrollOnClick={scrollOnClick} signupRef={signupRef} />
        <SignUp ref={signupRef} /> 
        <Venues ref={venuesRef} />
        <Bands ref={bandsRef}/> 
      </div>       
    </div>
    )
}

export default App
