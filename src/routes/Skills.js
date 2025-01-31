/*
import React from "react"; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';

const Skills = () => {
    return(
        <div>
            <Navbar/>
            <Heroimg2 heading = "SKILLS" text = "Below are my skills"/>
            <Footer/>
        </div>
    )
} 

export default Skills;
*/
/*
import React from "react"; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import SkillCard from '../components/SkillCard';
import "../components/Skills.css";  // ✅ Now it loads from components folder

const Skills = () => {
    return(
        <div>
            <Navbar/>
            <div className="heroimg2-container">  
                <Heroimg2/>
                <div className="skills-container">
                    <SkillCard title="Software Development" description="HTML, CSS, JavaScript, React, Bootstrap, TailwindCSS"/>
                    <SkillCard title="Front-end Development" description="Node.js, Express, MongoDB, Firebase, REST APIs"/>
                    <SkillCard title="Data Analytics" description="Git, GitHub, Docker, CI/CD, Agile Development"/>
                    <SkillCard title="Cloud" description=""/>
                </div>
            </div>
            <Footer/>
        </div>
    );
} 

export default Skills;
*/
import React from "react"; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import SkillCard from '../components/SkillCard';
import skillsData from '../components/SkillsData'; // Import the skills data
import "../components/Skills.css";  

const Skills = () => {
    return (
        <div>
            <Navbar/>
            <div className="heroimg2-container">  
                <Heroimg2/>
                <div className="skills-container">
                    {skillsData.map((skill, index) => (
                        <SkillCard 
                            key={index} 
                            headerText={skill.headerText} // Passing new text
                            title={skill.title} 
                            details={skill.details}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
} 

export default Skills;

