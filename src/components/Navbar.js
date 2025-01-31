import "./NavbarStyles.css";
import {FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react'
import {Link} from "react-router-dom";

const Navbar = () => { 
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">
       <h1>Satya Jaidev</h1>
      </Link>
      <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
            <Link to="/" style={{fontSize:"25px"}}>Home</Link>
        </li>
        <li>
            <Link to="/project" style={{fontSize:"25px"}}>Project</Link>
        </li>
        <li>
            <Link to="/contact" style={{fontSize:"25px"}}>Contact</Link>
        </li>
        <li>
          <Link to="/Skills" style={{fontSize:"25px"}}>Skills</Link> 
        </li>
        <li>
          <Link to="/Chat" style={{color:"rgb(173,216,243)",fontSize:"25px"}}>Chat With Me</Link>
        </li> 
        <li>
            <Link to="/about" style={{fontSize:"25px"}}>About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click? (<FaBars size={20} style={{color:"#fff"}}/>):(<FaTimes size={20} style={{color:"#fff"}}/>)}
      </div>
    </div>
  )
}

export default Navbar;
