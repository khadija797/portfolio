import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h3>Khadija Rafiq</h3>
          <p>Built with React.js. Focused on creating modern, <br />responsive, and user-friendly web applications.</p>
          <div className="footer-social-icons">
            <a href="https://github.com/khadija797" target='_blank'>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/khadija-rafiq-72a5561a7" target='_blank'>
              <FaLinkedin />
            </a>
            <a href="https://vercel.com/khadija797s-projects" target='_blank' >
              <FaGlobe />
            </a>
          </div>
        </div>
        <div className="footer-content-right">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>khadija62.dev@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='copy-right'>Copyfight 2025 khadija.com - All Right Reserved.</p>
    </div>
  )
}
export default Footer