import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import DisplayCard from '../components/DisplayCard';



const Project = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Heroimg2 heading="PROJECTS" text="Here are the personal projects I have worked on" />
        <div className="pro-btns">
        </div>
        <p style={{textAlign:'center',fontSize:'250%',fontStyle:'bold'}}>MY RECENT PROJECTS:</p>
      </div>
      <DisplayCard/>
      <Footer/>
    </div>
  )
}

export default Project
