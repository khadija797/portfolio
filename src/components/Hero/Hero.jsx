import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <h4>Hi, I'M </h4>
        <h2>Khadija Rafiq.</h2>
        <h3>Frontend Developer (React.js).</h3>
        <h4>I build modern and responsive React websites designed for performance and usability.</h4>
        <div className="hero-buttons">
          <button className="btn hero-hire-btn">Hire Me</button>
          <button className="btn hero-project-btn">Projects</button>
        </div>
      </div>
    </div>
  )
}
export default Hero
