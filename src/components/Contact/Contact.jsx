import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for projects or collaborations.</p>

      <div className="contact-buttons">
        <a
          href="mailto:khadija62.dev@email.com"
          className="contact-btn"
        >
          Email Me
        </a>

        <a
          href="https://wa.me/923405012562"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          WhatsApp
        </a>

        <a
          href="https://github.com/khadija797"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
