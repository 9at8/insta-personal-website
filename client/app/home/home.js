import React from 'react';
import fetch from 'node-fetch';

import Post from './../post/post';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts: null};
  }

  getHomePosts = () => {
    return (
      this.state.posts.map((post) => <Post key={post._id} post={post}/>)
    );
  };

  setPosts = (text) => {
    this.setState({posts: JSON.parse(text)});
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/home')
      .then(res => res.text())
      .then(resText => this.setPosts(resText));
  }

  render() {
    return (
      <div className="Home">
        {this.state.posts && this.getHomePosts()}
      </div>
    );
  }
}
