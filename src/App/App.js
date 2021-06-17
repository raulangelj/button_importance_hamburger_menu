import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [c, setC] = useState('')
  const [cli, setCli] = useState(false)

  return (
    <div className="App">
      <nav className="nav-bar">
        <ul className="menu">
          <li className="logo"><a className="nav-link" href="/">RJ</a></li>
          <li className={`nav-item ${c}`}><a className="nav-link" href="/home">Home</a></li>
          <li className={`nav-item ${c}`}><a className="nav-link" href="/about">About</a></li>
          <li className={`nav-item ${c}`}><a className="nav-link" href="/service">Services</a></li>
          <li className={`nav-item button ${c}`}><a className="nav-link" href="/login">Log In</a></li>
          <li className={`nav-item button secondary ${c}`}><a className="nav-link" href="/signup">Sign Up</a></li>
          <li className="toggle" onClick={() => {
            if (!cli) {
              setC('active')
              setCli(true)
            } else {
              setC('')
              setCli(false)
            }
          }}>
            <span className="nav-icon" />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App;
