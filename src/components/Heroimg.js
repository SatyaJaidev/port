import "./HeroimgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";


const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, My name is Jaidev and I'm a, </p>
            <h1>Software Developer.</h1>
            <div>
                <a href="/Satya Jaidev N.pdf" download className="btn">Resume</a>
                <a href="https://www.linkedin.com/in/satya-jaidev-n-148164280/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
                <a href="https://github.com/SatyaJaidev" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
            </div>
        </div>
    </div>
  )
}

export default Heroimg;

