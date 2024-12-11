import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/website-development.svg";

import Home2 from "./Home2";
import Type from "./Type";
import Intro from "../About/Intro";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills";
import CallToAction from "../CallToAction";

function Home() {
  return (
   <div className="outerContainer">
    <Intro/>
    <div className="tabs">
    <a className="resume-div" href="https://drive.google.com/file/d/1uR_JUjEKb_fHtEet7j9gdN-828P_KpbW/view">Resume</a>
    <a className="resume-div" href="https://peerlist.io/shivank100/articles">Articles</a>
    
    </div>
  
    <About/>
    <Projects/>
    <Skills/>
    <CallToAction/>
    <div class="fade-overlay"></div>
   </div>
  );
}

export default Home;
