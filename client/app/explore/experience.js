import React from 'react'
import { Link } from 'react-router-dom'

import DetailsButton from './details-button'

import './experience.css'

const Experience = (props) => {
  return (
    <div className="experience-container">
      <div className="experience-main-container">
        <div className="experience-image-container">
          <img src={props.image}/>
        </div>
        <div className="experience-name-container">
          <div className="experience-header"><b>{props.caption}</b></div>
          <div className="experience-detail">{props.position}</div>
        </div>
        <Link to={`/post/${props.postID}`}>
          <DetailsButton text="More"/>
        </Link>
      </div>
    </div>
  )
}

export default Experience