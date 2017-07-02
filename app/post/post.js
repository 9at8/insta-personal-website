import React from 'react';
import PropTypes from 'prop-types';

import Response from './response';


const Header = (props) => {
  return (
    <div className="header">
      <img className="avatar"
           src={props.author.avatar}
           style={{width: '50px'}}/>
      <div>
        {props.author.name}
        <br/>
        {!!props.location && props.location}
      </div>
    </div>
  );
};


const Image = (props) => {
  return <img src={props.src} alt={props.alt}/>;
};


export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="post">
        <Header author={this.props.post.author}
                location={this.props.post.location}/>
        <Image src={this.props.post.image}
               alt={this.props.caption}/>
        <Response likes={this.props.post.likes}
                  author={this.props.post.author}
                  caption={this.props.post.caption}
                  comments={this.props.post.comments}
                  time={this.props.post.time}/>
      </div>
    );
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
