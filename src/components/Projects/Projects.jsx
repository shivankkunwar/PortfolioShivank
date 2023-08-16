import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Faced from "../../Assets/Projects/Faced.png"
import TodoApp from "../../Assets/Projects/TodoApp.png"
import JavaAPI from "../../Assets/Projects/JavaAPI.png"
import Searches from "../../Assets/Projects/Searches.png"
import ChatAPP from "../../Assets/Projects/ChatAPP.png"
import Tiny from "../../Assets/Projects/Tiny.png"
import Weather from "../../Assets/Projects/Weather.png"
import TextEdit from "../../Assets/Projects/TextEdit.png"
import Budget from "../../Assets/Projects/Budget.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Faced}
              isBlog={false}
              title="Faced"
              description="Face detection Full Stack Web Application Using React, TypeScript, Node.js, PostgreSQL, JavaScript, JSX, HTML, CSS. Integrated the Face API JavaScript API for face detection."
              ghLink="https://github.com/shivankkunwar/FaceD"
              demoLink="https://github.com/shivankkunwar/FaceD"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodoApp}
              isBlog={false}
              title="Todo App"
              description="a Todo app using React.js and Firebase, replicating the popular Todoist app with CRUD operations for task management"
              ghLink="https://github.com/shivankkunwar/TodoApp"
              demoLink="https://todo-app-vfjn.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JavaAPI}
              isBlog={false}
              title="Movie Board"
              description="RESTful Movie Review API using Java Spring and MongoDB"
              ghLink="https://github.com/shivankkunwar/MovieBoard"
              demoLink="https://github.com/shivankkunwar/MovieBoard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Searches}
              isBlog={false}
              title="Searches"
              description="React app, featuring a search bar and dynamic cards, swiftly filters and displays content as you type. "
              ghLink="https://github.com/shivankkunwar/Searches"
              demoLink="https://shivankkunwar.github.io/Searches/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatAPP}
              isBlog={false}
              title="Chat App Frontend "
              description="A Whatsapp Frontend Clone using React, Redux  Functions -  Can add Messages, Clickable, Scrollale, Last message available on Sidebar "
              ghLink="https://github.com/shivankkunwar/chatApp"
              demoLink="https://chat-app-pied-three.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tiny}
              isBlog={false}
              title="TinyProjects"
              description=" curated collection of bite-sized React applications and components. From sliders to accordions, search bars to counters, and even a blog list - practice and master React concepts effectively."
              ghLink="https://github.com/shivankkunwar/ReactPractice"
              demoLink="https://react-practice-drab.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather APP"
              description="Enter any city name and get real-time weather information using JavaScript, HTML, and CSS."
              ghLink="https://github.com/shivankkunwar/weatherCheck"
              demoLink="https://whatisweather.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextEdit}
              isBlog={false}
              title="Text Editor"
              description=" text editor built with JavaScript, HTML, and CSS. Easily apply formatting like italic, bold, alignment (right, center, etc.), "
              ghLink="https://github.com/shivankkunwar/texteditor"
              demoLink="https://changetext.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Budget}
              isBlog={false}
              title="Budget Handler"
              description=" income and expenses, add descriptions, and watch as BudgetHandler calculates your total income and expenses. "
              ghLink="https://github.com/shivankkunwar/budgethandler.github.io"
              demoLink="https://budgethandler-github-io.vercel.app/r"
            />
          </Col>

        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
