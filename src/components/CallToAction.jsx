import {
    AiFillGithub,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import { IoIosMail } from "react-icons/io";

function CallToAction() {
    return <div className="cta-container">
        <div className="cta"> Contact</div>
        <h1>Get in Touch</h1>
        <h3> Want to chat? Just shoot a mail or DM</h3>
        <ul className="footer-icons" style={{marginBottom:''}}>
        <li className="social-icons">
              <a
                href="mailto:shivankkunwar100@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <IoIosMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/shivankkunwar?tab=repositories"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/ShivankKun19163"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shivank-kunwar/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
          </ul>
    
    </div>;
}

export default CallToAction;