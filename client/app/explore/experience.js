import React from 'react';

import './experience.css';

const Experience = (props) => {
  return (
    <div className="experience-container">
      <div className="experience-main-container">
        <img src={props.image}/>
        <div className="experience-name-container">
          <div className="experience-header"><b>{props.caption}</b></div>
          <div className="experience-detail">{props.position}</div>
        </div>
        <button className="experience-details">Details</button>
      </div>
    </div>
  );
};

export default Experience;