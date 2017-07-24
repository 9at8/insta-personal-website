import React from 'react';

import './mini-post.css';

const MiniPost = (props) => {
  if (!props.miniPost) {
    return <span className="mini-post-empty"> </span>
  }
  return (
    <div className="mini-post">
      <div className="mini-post-overlay">
        <span>{props.miniPost.likes}</span>
        <span>{props.miniPost.comments}</span>
      </div>
      <img
        alt={props.miniPost.altText}
        src={props.miniPost.image}/>
    </div>
  );
};

export default MiniPost;