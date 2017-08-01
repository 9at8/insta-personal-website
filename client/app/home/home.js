import React from 'react';
import axios from 'axios';

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

  componentDidMount() {
    axios.get('http://localhost:8080/api/posts/home')
      .then(response => this.setState({posts: response.data}));
  }

  render() {
    return (
      <div className="Home">
        {this.state.posts && this.getHomePosts()}
      </div>
    );
  }
}
