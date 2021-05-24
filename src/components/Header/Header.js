import React from 'react'
import './Header.css'
import rottenFruit from "../../assets/rottenFruit.png"

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-title">
        <img className='logo' src={rottenFruit} alt="rotten fruit logo" />
        <h1>Rancid Tomatillos</h1>
      </div>
      <div className="nav-title">
        <h1>🍿  Profile</h1>
      </div>
    </nav>
  )
}

export default Header
