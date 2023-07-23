import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './home'
import Bands from './bands'
import BandPage from './bandpage'
import Venues from './venues'
import VenuePage from './venuepage'
import Login from './login'
import Account from './account'
import SignUp from './signup'

export default function Main () {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bands" element={<Bands />} />
            <Route path={"/bands/:id"} element={<BandPage />} />
            <Route path="/venues" element={<Venues />} />
            <Route path={"/venues/:id"} element={<VenuePage />} />
            <Route path="/login" element={<Login />} />
            <Route path={`/login/:id`} element={<Account />} />   
            <Route path="/signup" element={<SignUp />} />     
        </Routes>
    )
}