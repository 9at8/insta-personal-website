import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import MiniPost from './mini-post';
import './profile.css';

const Stats = (props) => {
  const mobile = props.mobile ? '-mobile' : '';
  return (
    <div className={`profile-header-info-stats${mobile}`}>
      <Link
        className="profile-header-jobs"
        to="/explore">
        <div><b>2</b></div>
        <div className="profile-header-jobs-text">jobs</div>
      </Link>
      <Link
        className="profile-header-jobs"
        to="/9at8">
        <div><b>6</b></div>
        <div className="profile-header-jobs-text">projects</div>
      </Link>
      <Link
        className="profile-header-jobs"
        to="/">
        <div><b>∞</b></div>
        <div className="profile-header-jobs-text">fun</div>
      </Link>
    </div>
  );
};

const Bio = (props) => {
  const mobile = props.mobile ? '-mobile' : '';
  return (
    <div className={`profile-header-info-bio${mobile}`}>
      <span><b>Aditya Thakral</b> 19. 127.0.0.1 @ Waterloo, Ontario a.ditya.me</span>
    </div>
  );
};

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
        {!props.mobile && <Stats/>}
        {!props.mobile && <Bio/>}
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
      for (let j = i * 3; j < (i * 3) + 3; j++) {
        if (this.state.miniPosts[j]) {
          miniPostRow.push(
            <Link key={j} to={`/post/${this.state.miniPosts[j].postID}`}>
              <MiniPost key={j} miniPost={this.state.miniPosts[j]}/>
            </Link>
          );
        } else {
          miniPostRow.push(<MiniPost key={j}/>);
        }
      }

      return miniPostRow;
    };

    let miniPosts = [];
    const numberOfRows = this.state.miniPosts.length / 3;
    for (let i = 0; i < numberOfRows; i++) {
      miniPosts.push(
        <div
          key={i}
          className="mini-post-row">
          {renderMiniPostsRow(i)}
        </div>
      );
    }
    return miniPosts;
  };

  setMiniPosts = (miniPosts) => {
    let numberOfNulls = miniPosts.length % 3;
    for (let i = 0; i < numberOfNulls; i++) {
      miniPosts.push(null);
    }
    this.setState({miniPosts: miniPosts});
  };

  componentDidMount() {
    axios.get('http://localhost:8080/api/miniPosts')
      .then(response => this.setMiniPosts(response.data));
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
    this.state = {};

    const width = window.innerWidth;

    if (480 >= width && width >= 320) {
      this.state.mobile = true;
    } else {
      this.state.mobile = false;
    }
  }

  render() {
    return (
      <div className="profile-container">
        <Header
          mobile={this.state.mobile}
          name="9at8"
          image="https://scontent.fyzd1-1.fna.fbcdn.net/v/t1.0-9/19366404_10207406972092966_677887742544187123_n.jpg?oh=2357c89dc95d8ac11fe3fe6b908858e6&oe=5A07F05F"/>
        {this.state.mobile && <Bio mobile={this.state.mobile}/>}
        {this.state.mobile && <Stats mobile={this.state.mobile}/>}
        <MiniPostContainer/>
      </div>
    );
  }
};

