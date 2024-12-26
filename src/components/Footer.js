/*
import "./FooterStyles.css";
import React from 'react';
import {FaHome, FaPhone, FaLinkedin, FaMailBulk} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>2851 S King Drive</p>
                        <p>Chicago, IL</p>
                    </div>
                </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/> 
                <p>312-684-1792</p>
                </div>
            </div>
            <div className="right">
                <h4>About the company </h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores accusamus suscipit architecto illum culpa rerum possimus praesentium beatae hic debitis dolore molestias tempore doloremque nobis totam itaque illo, doloribus nisi!</p>
                <div className="social">
                <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                </div>

            </div>
        </div>
    </div>
  );
}

*/
import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaLinkedin, FaMailBulk, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>2901 S King Drive</p>
                        <p>Chicago, IL</p>
                    </div>
                </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/> 
                <p>312-684-1792</p>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>Throughout my journey, I've contributed to a diverse range of projects, achieving significant milestones along the way. Proudly open-sourcing many of them, l invite you to explore and contribute. Your suggestions for improvements or enhancements are not just welcome but
                encouraged. Collaborating with fellow enthusiasts is an invaluable avenue for mutual learning and growth. I am ever-ready for fresh ideas and constructive feedback - let's build something remarkable together.</p>
                <div className="social">
                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/satyajaidev/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    </a>
                    {/* GitHub Icon */}
                    <a href="https://github.com/SatyaJaidev" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    </a>
                    {/* Mail Icon */}
                    <a href="mailto:nsatyajaidev21@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer
