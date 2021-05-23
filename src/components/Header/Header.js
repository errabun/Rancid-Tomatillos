import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-title">
        <img src="../../public/rotten-noBG.png" alt="rotten fruit logo" />
        <h1>Rancid Tomatillos</h1>
      </div>
      <div className="nav-title">
        <h2>🍿  Profile</h2>
      </div>
    </nav>
  )
}

export default Header
