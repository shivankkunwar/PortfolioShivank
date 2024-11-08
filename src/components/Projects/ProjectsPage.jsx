import React from "react";
import ProjectCard from "./ProjectCards";
import { projectsAll } from "./data";
function ProjectsPage() {
  return (
    <div className="outerContainer">
      <div className="project-container">
        <button>
          <a href="/">Home</a>
        </button>
        <div className="project-container-title">Check out all my Projects</div>
        <p>
          I've worked on a variety of projects, from simple websites to complex
          web applications.
        </p>
        <div className="project-wall">
          {projectsAll.map((project, i) => {
            return <ProjectCard project={project} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
