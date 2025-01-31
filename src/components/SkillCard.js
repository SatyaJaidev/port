/*
import React from "react";
import "./Skillcard.css"; 

const SkillCard = ({ title, description }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SkillCard;
*/

/*
import React, { useState } from "react";
import "./Skillcard.css"; // Import styles

const SkillCard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`skill-card ${flipped ? "flipped" : ""}`} 
      onClick={() => setFlipped(!flipped)}
    >
      <div className="skill-card-inner">
        <div className="skill-card-front">
          <h3>2+ Years Experience</h3>
          <h3>{title}</h3>
        </div>

        <div className="skill-card-back">
          <p>{description}</p>
          <small>(Click to flip back)</small>
        </div>
      </div>
    </div>
  );
};

export default SkillCard; 
*/

import React, { useState } from "react";
import "./Skillcard.css"; // Import styles

const SkillCard = ({ headerText, title, details }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`skill-card ${flipped ? "flipped" : ""}`} 
      onClick={() => setFlipped(!flipped)}
    >
      <div className="skill-card-inner">
        {/* Front Side - Now Shows Header Text Above the Title */}
        <div className="skill-card-front">
          <h4 className="card-header">{headerText}</h4> {/* New text above title */}
          <h3>{title}</h3>
          <br />
          <small>(Click to flip back)</small>
        </div>

        {/* Back Side - Shows Description */}
        <div className="skill-card-back">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;


