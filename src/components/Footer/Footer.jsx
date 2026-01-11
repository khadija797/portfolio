import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h3>Khadija Rafiq</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, magnam maxime. Voluptate modi aliquid est esse voluptatum perspiciatis non ipsam?</p>
          <div className="footer-social-icons">
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h3>COMPANY</h3>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
        </div>
        <div className="footer-content-right">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>123456789</li>
            <li>contact@khadija.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='copy-right'>Copyfight 2025 khadija.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
