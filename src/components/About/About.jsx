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
            I'm a frontend developer who loves creating clean, modern, and responsive websites. I work mainly with React.js and enjoy turning ideas into simple, smooth, and easy-to-use interfaces.
          </p>
          <p>
            I focus on writing clean code, building user-friendly designs, and creating websites that work well on every screen. My goal is to build experiences that are not only functional but also enjoyable for users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
