import React from 'react';
import axios from 'axios';

import Post from './../post/post';

import './home.css';

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

  componentDidMount() {
    axios.get('/api/posts/home')
      .then(response => this.setState({posts: response.data}));
  }

  render() {
    return (
      <div className="home">
        {this.state.posts && this.getHomePosts()}
      </div>
    );
  }
}
