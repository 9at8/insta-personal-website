import React from 'react';

import './details-button.css';

const DetailsButton = (props) => {
  return (
    <div className="details-button">
      {props.text}
    </div>
  )
};

export default DetailsButton;