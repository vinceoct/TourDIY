import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const CreateAccount = () => {
    const errRef = useRef()

    const [emailInput, setEmail] = useState('')
    const [passwordInput, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validConfirmedPassword, setValidConfirmedPassword] = useState(false)
    const [artistnameInput, setArtistName] = useState('')
    const [cityInput, setCity] = useState('')
    const [selectedState, setSelectedState] = useState('');
    const [genreInput, setGenre] = useState('')
    const [twitterInput, setTwitter] = useState('')
    const [instagramInput, setInstagram] = useState('')
    const [spotifyInput, setSpotify] = useState('')
    const [bandcampInput, setBandcamp] = useState('')
    const [soundcloudInput, setSoundcloud] = useState('')

    const [states, setStates] = useState([]);


    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        getStates().then(data => setStates(data));
    }, []);


    const getStates = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/states')
            console.log(response.data)
            return response.data
        }catch (error) {
            console.error(error)
            return[]
        }
    }

    useEffect(() => {
        const result = PWD_REGEX.test(passwordInput)
        console.log(result)
        console.log(passwordInput)
        setValidPassword(result)
        const match = passwordInput === confirmPassword
        setValidConfirmedPassword(match)
    }, [passwordInput, confirmPassword])

    useEffect(() => {
        setErrorMessage('')
    }, [passwordInput, confirmPassword])



    const handleSubmit = async (e) => {
    e.preventDefault()
    const isPasswordValid = PWD_REGEX.test(passwordInput)
    if (!isPasswordValid) {
        setErrorMessage("Invalid Entry")
        return
    }
    try {
        const response = await axios.post(`localhost:3001/api/artists`, {
        name: artistnameInput,
        genre: genreInput,
        city: cityInput,
        state: selectedState,
        twitter: twitterInput,
        instagram: instagramInput,
        spotify: spotifyInput,
        bandcamp: bandcampInput,
        soundcloud: soundcloudInput,
        email: emailInput,
        password: passwordInput,     
    })
    console.log(response.data)
    setSuccess(true)
    } catch (err) {
         if (!err?.response) {
             setErrorMessage('No server response')
         } else {
             setErrorMessage('Registration failed')
         }
         errRef.current.focus()
     }
}


return (
<section className="create-account-page">
    {success ? (
                <section>
                    <h1>Account successfully created.</h1>
                    <p>
                    {/* <Link className="login" to="/login"><button id="already-have-account" className="submit-button">Log in.</button></Link>  */}
                    </p>
                </section>
            ) : (
            <section className='form-container'>
              <section>
                <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
              </section>
    <form onSubmit={handleSubmit}>
        <div class="form-group row">
            <label for="artistname" class="col-4 col-form-label">Artist/Band Name</label> 
                <div class="col-8">
                    <input id="artistname" value={artistnameInput} onChange={(e)=>setArtistName(e.target.value)} name="artistname" type="text" required="required" class="form-control"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="email" class="col-4 col-form-label">Email</label> 
                <div class="col-8">
                    <input id="email" value={emailInput} onChange={(e) => setEmail(e.target.value)} name="email" type="text" required="required" class="form-control"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="password" class="col-4 col-form-label">Password</label> 
                <div class="col-8">
                    <input id="password" type='password' value={passwordInput} onChange={(e) => setPassword(e.target.value)} name="password" class="form-control" required="required"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="confpassword" class="col-4 col-form-label">Confirm Password</label> 
                <div class="col-8">
                    <input id="confpassword" type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="password" class="form-control" required="required" aria-invalid={validConfirmedPassword ? "false" : "true"} />
                </div>
        </div>
        <div class="form-group row">
            <label for="city" class="col-4 col-form-label">City</label> 
                <div class="col-8">
                    <input id="city" value={cityInput} onChange={(e) => setCity(e.target.value)} name="city" type="text" required="required" class="form-control"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="state" class="col-4 col-form-label">State</label> 
                <div class="col-8">
                    <select id="state" name="state" required="required" class="custom-select"  value={selectedState} onChange={(e) => setSelectedState(e.target.value)}><option value="">Select a State</option>
        {states.map(state => (
          <option key={state.abbrev} value={state.abbrev}>
            {state.name}
          </option>))}</select>
                </div>
        </div>
        <div class="form-group row">
            <label for="genre" class="col-4 col-form-label">Genre</label> 
                <div class="col-8">
                    <input id="genre" value={genreInput} onChange={(e) => setGenre(e.target.value)} name="genre" type="text" class="form-control"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="twitter" class="col-4 col-form-label">Twitter</label> 
                <div class="col-8">
                    <input id="twitter" value={twitterInput} onChange={(e) => setTwitter(e.target.value)} name="twitter" placeholder="@" type="text" class="form-control"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="instagram" class="col-4 col-form-label">Instagram</label> 
                <div class="col-8">
                    <input id="instagram" value={instagramInput} onChange={(e) => setInstagram(e.target.value)} name="instagram" placeholder="@" type="text" class="form-control"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="spotify" class="col-4 col-form-label">Spotify</label> 
                <div class="col-8">
                    <input id="spotify" value={spotifyInput} onChange={(e) => setSpotify(e.target.value)} name="spotify" placeholder="link to your Spotify" type="text" class="form-control"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="bandcamp" class="col-4 col-form-label">Bandcamp</label> 
                <div class="col-8">
                    <input id="bandcamp" value={bandcampInput} onChange={(e) => setBandcamp(e.target.value)} name="bandcamp" placeholder="link to your Bandcamp" type="text" class="form-control"/>
                </div>
        </div>
        <div class="form-group row">
            <label for="soundcloud" value={soundcloudInput} onChange={(e) => setSoundcloud(e.target.value)}class="col-4 col-form-label">SoundCloud</label> 
                <div class="col-8">
                    <input id="soundcloud" name="soundcloud" placeholder="link to your SoundCloud" type="text" class="form-control"/>
                </div>
        </div> 
        <div class="form-group row">
            <div class="offset-4 col-8">
                <button disabled={!validPassword || !validConfirmedPassword ? true : false} name="submit" type="submit" class="btn custsecondary">Sign Up</button>
            </div>
        </div>
    </form>
    
</section>
            )
}
</section>
)
}

export default CreateAccount