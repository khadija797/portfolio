import React from "react";
import "./Projects.css";
import { projects } from '../../assets/assets'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-slider">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project"
            style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link}
                target="_blank"
                className="project-btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
