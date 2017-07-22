import React from 'react';
import fetch from 'node-fetch';

import Post from './../post/post';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postObject: null
    };
  }

  getHomePosts = () => {
    return (
      <div className="Home">
        <Post post={this.state.postObject}/>
        <Post post={this.state.postObject}/>
        <Post post={this.state.postObject}/>
        <Post post={this.state.postObject}/>
        <Post post={this.state.postObject}/>
        <Post post={this.state.postObject}/>
      </div>
    );
  };

  setPostObject = (text) => {
    console.log(text);
    this.setState({postObject: JSON.parse(text)});
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/home')
      .then(res => res.text())
      .then(resText => this.setPostObject(resText));
  }

  render() {
    return (
      <div>
        {this.state.postObject && this.getHomePosts()}
      </div>
    );
  }
}
