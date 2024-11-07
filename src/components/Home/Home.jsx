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
    <a className="resume-div" href="https://drive.google.com/file/d/1nqnyx8qUAT72wmEEz8foxRLivFYEvyeE/view?usp=sharing">Resume</a>
    <About/>
    <Projects/>
    <Skills/>
    <CallToAction/>
    <div class="fade-overlay"></div>
   </div>
  );
}

export default Home;
