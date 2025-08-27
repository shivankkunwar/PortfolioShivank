import React from "react";
import Intro from "../About/Intro";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills";
import CallToAction from "../CallToAction";
import Plasma from "../Plasma";

function Home() {
  return (
   <div className="home-container">
     {/* Plasma Background */}
           <div className="plasma-background">
        <Plasma
          color="#4a90e2"
          speed={0.8}
          direction="forward"
          scale={1.2}
          opacity={0.3}
          mouseInteractive={true}
        />
      </div>

     {/* Content */}
     <div className="outerContainer">
       <Intro/>
       <div className="tabs">
       <a className="resume-div" href="https://drive.google.com/file/d/1DtqsYuFF6byudQ-TKmr6sXvtjdPkJHG2/view?usp=sharing">Resume</a>
       <a className="resume-div" href="https://peerlist.io/shivank100/articles">Articles</a>

       </div>

       <About/>
       <Projects/>
       <Skills/>
       <CallToAction/>
       <div class="fade-overlay"></div>
     </div>
   </div>
  );
}

export default Home;
