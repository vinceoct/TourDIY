
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/custom-bootstrap-colors.css'
import './css/App.css'
import './css/header.css'
import './css/main.css'
import './css/footer.css'
import Main from './components/main'
import Footer from './components/footer'
import Header from './components/header'


function App() {
  
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>  
      <main className="main">
        <Main />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
