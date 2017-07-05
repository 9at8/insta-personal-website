import React from 'react';

import Post from './post/post';

import './home.css';
import postObject from './SampleData';

const Home = (props) => {
  return (
    <div className="home">
      <Post post={postObject}/>
      <Post post={postObject}/>
      <Post post={postObject}/>
      <Post post={postObject}/>
      <Post post={postObject}/>
      <Post post={postObject}/>
    </div>
  );
};

export default Home;
