import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { projectWall } from "./data";
function Projects() {
  return (
    <div className="project-container">
      <div className="project-container-title">Check out my latest work</div>
      <p>
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div className="project-wall">
        {projectWall.map((project, i)=>{
          return <ProjectCard project={project} key={i}/>
        })}
      </div>
      <a href={"/projects"} className="see-more">.....see more</a>
    </div>
  );
}

export default Projects;
