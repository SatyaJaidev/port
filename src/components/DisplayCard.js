import "./DisplaycardStyles.css";
import { NavLink } from "react-router-dom"; 
import React from 'react';
import pro1 from "../assets/sushi.jpg";
import pro2 from "../assets/devsecops.jpg";
import pro3 from "../assets/sf.jpg";

const DisplayCard = (props) => {
  return (
    <div className="project-card">
    <h2 className="project-title">{props.title}</h2>
    <img src={pro2} alt="Devsecops Img"/>   
    <h2 className="project-title">Devsecops Project Management</h2>
    <div className="pro-details">
        <p>This project delivers a comprehensive DevSecOps automation pipeline, created through a blend of the Waterfall and Scrum methodologies across two phases. 
          The first phase establishes core components and follows a structured Waterfall approach, while the second phase transitions into Scrum to adaptively enhance features and introduce roles for dynamic, iterative improvements.
        </p>
        <div className="pro-btns">
            <NavLink to="https://github.com/ssrivastav01/DevSecOps-Automation-Led-by-GenAI-Virtual-Teams-using-Scrum-and-Waterfall" className="btn">View</NavLink>
        </div>
    </div>
    <img src={pro3} alt="SF Img"/>
    <h2 className="project-title">SalesForce for Project Management</h2>
    <div className="pro-details">
        <p>Welcome to the Project Management App built in Salesforce! This app provides a streamlined approach for managing projects by allowing users to create projects from templates, automate task creation, and enhance overall project workflow management. 
          It's designed to help your organization boost productivity and efficiency.</p>
        <div className="pro-btns">
            <NavLink to="https://github.com/SatyaJaidev/salesforce" className="btn">View</NavLink>
        </div>
    </div>
    <img src={pro1} alt="SushiMan"/>   
    <h2 className="project-title">SushiMan Website</h2>
    <div className="pro-details">
        <p>The SushiMan website is a fully responsive and visually engaging project featuring a navigation bar, creative hero section, and multiple content-rich sections like Popular Food and Trending Sushi.
           It employs CSS variables, BEM methodology, and JavaScript-rendered HTML for modularity and efficiency. Smooth animations and responsive design enhance the user experience across all devices. The project boasts a well-organized structure, making it easy to maintain and scale.</p>
        <div className="pro-btns">
            <NavLink to="https://github.com/SatyaJaidev/SushiMan-Website" className="btn">View</NavLink>
        </div>
    </div>
</div>
  )
}

export default DisplayCard


/*
import "./DisplaycardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import pro1 from "../assets/sushi.jpg";

const DisplayCard = () => {
  return (
    <div className="work-container">
      <div className="project-card">
        <img src={pro1} alt="Sushi Project" />
        <h2 className="project-title">Sushi Website</h2>
        <div className="pro-details">
          <p>This is a fully responsive sushi restaurant website, showcasing menu items and services.</p>
          <div className="pro-btns">
            <NavLink to="/view" className="btn">
              View
            </NavLink>
            <NavLink to="/source" className="btn">
              Source
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
*/