import React from 'react';
import {Link} from 'react-router-dom';

import MiniPost from './mini-post';
import './profile.css';

const Header = (props) => {
  return (
    <div className="profile-header">
      <div className="profile-header-image">
        <img src={props.image}/>
      </div>
      <div className="profile-header-info">
        <div className="profile-header-info-main">
          <span className="profile-header-name">{props.name}</span>
          <button className="profile-header-button">Edit Profile</button>
        </div>
        <div className="profile-header-info-stats">
          <span className="profile-header-jobs"><b>2</b> Jobs</span>
          <span className="profile-header-jobs"><b>6</b> Projects</span>
          <span className="profile-header-jobs"><b>∞</b> Fun</span>
        </div>
        <div className="profile-header-info-bio">
          <span><b>Aditya Thakral</b> 19. 127.0.0.1 @ Waterloo, Ontario a.ditya.me</span>
        </div>
      </div>
    </div>
  );
};

class MiniPostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {miniPosts: null};
  }

  renderMiniPosts = () => {
    const renderMiniPostsRow = (i) => {
      let miniPostRow = [];
      for (let j = i * 3; j < 3; j++) {
        if (this.state.miniPosts[j]) {
          miniPostRow.push(
            <Link to={`/post/${this.state.miniPosts[j].postID}`}>
              <MiniPost key={j} miniPost={this.state.miniPosts[j]}/>
            </Link>
          );
        } else {
          miniPostRow.push(<MiniPost/>)
        }
      }
      return miniPostRow;
    };

    let miniPosts = [];
    const numberOfRows = this.state.miniPosts.length / 3;
    for (let i = 0; i < numberOfRows; i++) {
      miniPosts.push(
        <div className="mini-post-row">
          {renderMiniPostsRow(i)}
        </div>
      );
    }
    return miniPosts;
  };

  setMiniPosts = (text) => {
    let miniPosts = JSON.parse(text);
    let numberOfNulls = miniPosts.length % 3;
    for (let i = 0; i < numberOfNulls; i++) {
      miniPosts.push(null);
    }
    this.setState({miniPosts: miniPosts});
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/miniPosts')
      .then(res => res.text())
      .then(resText => this.setMiniPosts(resText));
  }

  render() {
    return (
      <div className="mini-post-container">
        {this.state.miniPosts && this.renderMiniPosts()}
      </div>
    );
  }
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-container">
        <Header
          name="9at8"
          image="https://scontent.fyzd1-1.fna.fbcdn.net/v/t1.0-9/19366404_10207406972092966_677887742544187123_n.jpg?oh=2357c89dc95d8ac11fe3fe6b908858e6&oe=5A07F05F"/>
        <MiniPostContainer/>
      </div>
    );
  }
};

