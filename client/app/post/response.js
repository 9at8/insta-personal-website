import React from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div className="likes">
      <div className="buttons">
        <button className="like">Heart</button>
        <button className="comment">Comment</button>
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
    this.state = {
      comments: this.props.comments.slice(-4),
      size: this.props.comments.length
    };
  };

  showComments = () => {
    return this.state.comments.map((item) => {
      return <Comment user={item.user} comment={item.comment}/>;
    });
  };

  handleMoreComments = () => {
    this.setState(() => {
      return {
        comments: this.props.comments
      };
    });
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
