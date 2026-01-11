import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <h3 className='logo'> Khadija Rafiq </h3>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>

        <a href='#about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</a>
        <a href='#skills' onClick={() => setMenu("skills")} className={menu === "skills" ? "active" : ""}>Skills</a>
        <a href='#projects' onClick={() => setMenu("projects")} className={menu === "projects" ? "active" : ""}>Projects</a>
        <a href='#contact' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className="navbar-right">
        <a
          href="https://wa.me/923405012562"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-btn"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default Navbar
