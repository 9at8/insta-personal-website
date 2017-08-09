import React from 'react';

import sprites from './../../public/sprites.png';
import './mini-post.css';

const MiniPost = (props) => {
  if (!props.miniPost) {
    return <div className="mini-post-empty"> </div>
  }
  return (
    <div
      className="mini-post"
      style={{background: `no-repeat center/auto 100% url(${props.miniPost.image})`}}>
      <div className="mini-post-overlay">
        <div style={{backgroundImage: `url(${sprites})`}}/>
        <span>{props.miniPost.likes}</span>
        <span>{props.miniPost.comments}</span>
      </div>
    </div>
  );
};

export default MiniPost;