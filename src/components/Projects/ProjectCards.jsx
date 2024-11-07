import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
function ProjectCards({ project }) {
  return (
    <div className="project-wall-card">
      <img src={project.image} alt="" className="project-card-image" />
      <div className="project-card-details">
        <div className="project-card-title">{project.title}</div>
        <div className="project-card-timeline">
          {project.start + "-" + project.end}
        </div>
        <div className="project-card-description"> {project.description}</div>
        <div className="project-card-tech-container">
        {project?.tech.map((stack, i) => 
          <div key={i} className="project-card-tech">
            {stack}
          </div>
        )}
        </div>
        <div className="project-card-link-container">
        {project?.links?.github&&
          <a href={project?.links?.github}  className="project-card-link">
            Github
          </a>
        }
        {project?.links?.hosted&&
          <a href={project?.links?.hosted}  className="project-card-link">
            Website
          </a>
        }
        </div>
        
      </div>
    </div>
  );
}
export default ProjectCards;
