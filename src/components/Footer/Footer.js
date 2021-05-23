import React from 'react'
import './Footer.css'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='github-link'>
        <FaGithub />
        <a href="https://github.com/errabun">Eric Rabun</a>
      </div>
      <div className='github-link'>
        <FaGithub />
        <a href="https://github.com/RMartin0717">Riley Martin</a>
      </div>
    </footer>
  )
}

export default Footer
