import React from 'react';
import PropTypes from 'prop-types';

import Response from './response';

import './post.css';


const Header = (props) => {
  const linkToLocation = () => {
    return <a href={props.location.website}>{props.location.text}</a>;
  };

  return (
    <div className="post-header">
      <img
        className="post-avatar"
        src={props.author.avatar}/>
      <div>
        <span><b>{props.author.name}</b></span>
        <span>{!!props.location && linkToLocation()}</span>
      </div>
    </div>
  );
};

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.post) {
      let standalone = true;
      this.state = {standalone: standalone};
    } else {
      this.state = {};
    }
  }

  renderStandalonePost = () => {
    if (this.state.post) {
      return (
        <div className="post-standalone">
          <div className="post-standalone-picture-container">
            <img
              className="post-standalone-picture"
              src={this.state.post.image}
              alt={this.state.post.caption}/>
          </div>
          <div className="post-standalone-container">
            <Header
              author={this.state.post.author}
              location={this.state.post.location}/>
            <Response
              standalone={true}
              likes={this.state.post.likes}
              author={this.state.post.author}
              caption={this.state.post.caption}
              comments={this.state.post.comments}
              time={this.state.post.time}/>
          </div>
        </div>
      );
    }
  };

  setPostObject = (text) => {
    this.setState({post: JSON.parse(text)});
  };

  componentDidMount() {
    if (this.state.standalone) {
      fetch('http://localhost:8080/api/post/' + this.props.match.params.postID)
        .then(res => res.text())
        .then(resText => this.setPostObject(resText));
    }
  }

  render() {
    if (!this.state.standalone) {
      return (
        <div className="post">
          <Header
            author={this.props.post.author}
            location={this.props.post.location}/>
          <img
            className="post-picture"
            src={this.props.post.image}
            alt={this.props.caption}/>
          <Response
            likes={this.props.post.likes}
            author={this.props.post.author}
            caption={this.props.post.caption}
            comments={this.props.post.comments}
            time={this.props.post.time}/>
        </div>
      );
    } else {
      return <div>{this.renderStandalonePost()}</div>;
    }
  }
}

Post.propTypes = {
  post: PropTypes.shape(
    {
      author: PropTypes.shape(
        {
          name: PropTypes.string,
          avatar: PropTypes.string
        }).isRequired,
      location: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      likes: PropTypes.arrayOf(PropTypes.string).isRequired,
      comments: PropTypes.arrayOf(PropTypes.shape(
        {
          user: PropTypes.string.isRequired,
          comment: PropTypes.string.isRequired
        })).isRequired
    }
  )
};
