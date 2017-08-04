import React from 'react';
import PropTypes from 'prop-types';

import sprites from './../../public/sprites.png';

import './response.css';

// Like Component -----------------------
const Likes = (props) => {
  const numberOfLikes = () => {
    const num = props.likes;
    if (num === 0) {
      return;
    } else if (num === 1) {
      return num + ' like';
    }
    return num + ' likes';
  };

  let style = {};
  if (!props.standalone) {
    style = {border: 'none'};
  }

  let isLikedClassName = 'like';
  if (props.isLiked) {
    isLikedClassName = 'red-like';
  }

  return (
    <div className="likes" style={style}>
      <div className="buttons">
        <div
          style={{backgroundImage: `url(${sprites})`}}
          onClick={() => props.toggleLike()}
          className={`${isLikedClassName} like-comment-common`}>
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


const Comments = (props) => {
  let state;
  if (props.standalone) {
    state = {
      comments: props.comments.slice(-10),
      size: props.comments.length
    };
  } else {
    state = {
      comments: props.comments.slice(-4),
      size: props.comments.length
    };
  }

  const showComments = () => {
    return state.comments.map((item) => {
      return <Comment user={item.user} comment={item.comment}/>;
    });
  };

  const handleMoreComments = () => {
    state.comments = props.comments;
  };

  const loadMoreComments = () => {
    if (state.size === state.comments.length) {
      return;
    }
    return (
      <button
        className="more-comments"
        onClick={handleMoreComments}>
        load more comments
      </button>
    );
  };

  if (!props.comments) {
    return <div className="comments"></div>;
  }

  if (props.standalone) {
    return (
      <div className="comments" style={{overflowY: 'auto'}}>
        <ul>
          <Comment
            user={props.author}
            comment={props.caption}/>
        </ul>
        {loadMoreComments()}
        <ul>
          {showComments()}
        </ul>
      </div>
    );
  }
  return (
    <div className="comments">
      <ul>
        <Comment
          user={props.author}
          comment={props.caption}/>
      </ul>
      {loadMoreComments()}
      <ul>
        {showComments()}
      </ul>
    </div>
  );
};

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

const Response = (props) => {
  if (props.standalone) {
    return (
      <div className="response-standalone-container">
        <Comments
          standalone={true}
          author={props.author.name}
          caption={props.caption}
          comments={props.comments}/>
        <div>
          <Likes
            standalone={true}
            isLiked={props.isLiked}
            toggleLike={props.toggleLike}
            likes={props.likes}/>
          <Time time={props.time}/>
          <AddComment/>
        </div>
      </div>
    );
  }
  return (
    <div className="response">
      <Likes
        isLiked={props.isLiked}
        toggleLike={props.toggleLike}
        likes={props.likes}/>
      <Comments
        author={props.author.name}
        caption={props.caption}
        comments={props.comments}/>
      <Time time={props.time}/>
      <AddComment/>
    </div>
  );
};

export default Response;

// --------------------------------------
