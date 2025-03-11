import React from "react";
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
    <a className="resume-div" href="https://drive.google.com/file/d/19yaVl20zWBMQrP7dEj6yOmO5kvR4xD3V/view?usp=sharing">Resume</a>
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
