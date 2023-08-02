import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/fonts.css'
import { AuthProvider } from './context/authprovider';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>,
)
