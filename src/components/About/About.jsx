import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT SIDE — PHOTO */}
        <div className="about-img">
          <img
            src={assets.profile} alt="Khadija Rafiq" />
        </div>

        {/* RIGHT SIDE — TEXT */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I'm a frontend developer who focuses on building clean, modern, and
            responsive web experiences. I specialize in React.js and enjoy
            turning ideas into smooth, functional user interfaces.
          </p>

          <p>
            My focus is on writing clean code, creating intuitive layouts, and
            delivering websites that are fast, responsive, and user-friendly.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
