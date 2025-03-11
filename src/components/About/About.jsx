import React from "react";
import { useState } from "react";

function About() {
  const [toogleItem, setToogleItem] = useState(null)
  const experiences = [
    {
      company: "Sumaaroh/Sumaroh",
      role: "Full stack developer",
      period: "February 2025 - present",
      icon: "/Assets/sumaroh.webp",
      details:["Developed responsive websites and web applications using NextJS, ReactJS, JavaScript, and TailwindCSS.","Architected and maintained a PayloadCMS-based CMS, regularly adding new templates to enhance digital content management","Oversaw deployment and updates on a DigitalOcean droplet via SSH, ensuring high performance and security."]
    },
    {
      company: "Algobulls",
      role: "Frontend Engineer Intern",
      period: "January 2024 - september 2024",
      icon: "/Assets/algobulls.webp",
      details:["Developed responsive React.js applications, refactoring GenAI chatbot to WebSocket for real-time functionality.","Improved UI/UX, implemented Jest/Cypress tests, and used AWS cloud infrastructure.","Managed CI/CD pipelines, contributed to mobile app development, and created mock APIs."]
    },
    {
      company: "IEEE",
      role: "SDE intern",
      period: "july 2022 - September 2022",
      icon: "/Assets/ieee.webp"
    },
  ];
  const education =[
    {
      company: "Graphic era university",
      role: "Btech CSE",
      period: "june 2019 - july 2023",
      icon: "/Assets/geu.JPG"
    },
  ]

  const customList = ( prop)=>{
    return (prop.map((exp, index) => (
      <div key={index} className="experience-item" onClick={()=>setToogleItem(index)}>
        <img src={exp.icon} alt="profile" className="experience-icon"/>
        <div className="experience-content">
          <div className="experience-header">
            <div className="experience-company-info">
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-role">{exp.role}</p>
            </div>
            <span className="experience-period">{exp.period}</span>
          </div>
          {
            toogleItem === index ?
            <div className="experience-details">
              <ul>
                {exp?.details&&exp?.details.map((detail, i)=><li key={i}>{detail}</li>)}
              </ul>
            </div> : <></>
          }
        </div>
        
      </div>
    )))
  }
  return (
    <div className="about-container">
      <h3>
        <strong>About</strong>{" "}
      </h3>
      <p>
        I’m a Computer Science graduate passionate about web development. My
        GitHub showcases projects where I blend frontend skills with emerging
        backend technologies. I thrive on problem-solving and love creating
        scalable applications that make an impact.
      </p>

      <div className="work-experience">
      <h2 className="title">Work Experience</h2>
      <div className="experience-list">
        {customList(experiences)}
      </div>
    </div>
    <div className="education">
    <h2 className="title">Education</h2>
      <div className="experience-list">
        {customList(education)}
      </div>
    </div>
    </div>
  );
}

export default About;
