import React, { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const storedEmail = localStorage.getItem('email')
    
    if (storedToken && storedEmail) {
        setLoggedIn(true)
        setUser({ email: storedEmail })
    }
}, [])

    const login = (userData) => {
        setLoggedIn(true)
        setUser(userData)
    }

    const logout = () => {
        
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        setLoggedIn(false)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ loggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }