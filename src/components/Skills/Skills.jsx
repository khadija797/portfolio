import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "HTML5", color: "#e34c26" },
  { name: "CSS3", color: "#264de4" },
  { name: "JavaScript", color: "#f0db4f" },
  { name: "React.js", color: "#61dafb" },
  { name: "Tailwind CSS", color: "#38b2ac" },
  { name: "Git & GitHub", color: "#f1502f" },
  { name: "Responsive Design", color: "#4a90e2" },
  { name: "UI/UX", color: "#ff6b6b" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ borderColor: skill.color }}
          >
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
