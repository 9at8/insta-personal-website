import React from 'react';
import PropTypes from 'prop-types';

import sprites from './../../public/sprites.png';

import './response.css';

// Like Component -----------------------
const Likes = (props) => {
  const numberOfLikes = () => {
    const num = props.likes.length;
    if (num === 0) {
      return;
    } else if (num === 1) {
      return num + ' like';
    }
    return num + ' likes';
  };

  let style = {};
  if (!props.standalone) {
    style = {border: "none"};
  }

  return (
    <div className="likes" style={style}>
      <div className="buttons">
        <div
          style={{backgroundImage: `url(${sprites})`}}
          className="like like-comment-common">
        </div>
        <div
          style={{backgroundImage: `url(${sprites})`}}
          className="comment like-comment-common">
        </div>
      </div>
      <div>
        {numberOfLikes()}
      </div>
    </div>
  );
};

// --------------------------------------


// Comments Component -------------------

const Comment = (props) => {
  return (
    <li>
      <b>{props.user + ' '}</b>
      {props.comment}
    </li>
  );
};


class Comments extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.standalone) {
      this.state = {
        comments: this.props.comments.slice(-10),
        size: this.props.comments.length
      };
    } else {
      this.state = {
        comments: this.props.comments.slice(-4),
        size: this.props.comments.length
      };
    }
  };

  showComments = () => {
    return this.state.comments.map((item) => {
      return <Comment user={item.user} comment={item.comment}/>;
    });
  };

  handleMoreComments = () => {
    this.setState({comments: this.props.comments});
  };

  loadMoreComments = () => {
    if (this.state.size === this.state.comments.length) {
      return;
    }
    return (
      <button
        className="more-comments"
        onClick={this.handleMoreComments}>
        load more comments
      </button>
    );
  };

  render() {
    if (!this.props.comments) {
      return <div className="comments"> </div>
    }

    if (this.props.standalone) {
      return (
        <div className="comments" style={{overflowY: "auto"}}>
          <ul>
            <Comment
              user={this.props.author}
              comment={this.props.caption}/>
          </ul>
          {this.loadMoreComments()}
          <ul>
            {this.showComments()}
          </ul>
        </div>
      );
    }
    return (
      <div className="comments">
        <ul>
          <Comment
            user={this.props.author}
            comment={this.props.caption}/>
        </ul>
        {this.loadMoreComments()}
        <ul>
          {this.showComments()}
        </ul>
      </div>
    );
  }
}

Comments.propTypes = {
  author: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

// --------------------------------------


// Time Component -----------------------

const Time = (props) => {
  return <div className="time">{props.time}</div>;
};

// --------------------------------------


// Add a comment Component --------------

const AddComment = (props) => {
  return (
    <div className="add-comment">
      <input placeholder="Add a comment..."/>
      <button>...</button>
    </div>
  );
};

// --------------------------------------

// Only the response is exported
// Response Component -------------------

export default class Response extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
  }

  render() {
    if (this.props.standalone) {
      return (
        <div className="response-standalone-container">
          <Comments
            standalone={true}
            author={this.props.author.name}
            caption={this.props.caption}
            comments={this.props.comments}/>
          <div>
            <Likes
              standalone={true}
              likes={this.props.likes}/>
            <Time time={this.props.time}/>
            <AddComment/>
          </div>
        </div>
      );
    }
    return (
      <div className="response">
        <Likes likes={this.props.likes}/>
        <Comments
          author={this.props.author.name}
          caption={this.props.caption}
          comments={this.props.comments}/>
        <Time time={this.props.time}/>
        <AddComment/>
      </div>
    );
  }
}

// --------------------------------------
