import React from "react";
import "./Skills.css";
import { skillsData } from '../../assets/assets'


const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            className="skill-card"
            key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
