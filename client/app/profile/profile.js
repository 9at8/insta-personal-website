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
        <div><b>{props.jobs}</b></div>
        <div className="profile-header-jobs-text">jobs</div>
      </Link>
      <Link
        className="profile-header-jobs"
        to="/9at8">
        <div><b>{props.projects}</b></div>
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
      <span><b>Aditya Thakral</b> Your friendly neighborhood web developer!</span>
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
          <div className="profile-header-links">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/99at8">
              <div className="fa fa-linkedin-square fa-2x" aria-hidden="true"/>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/9at8">
              <div className="fa fa-github-square fa-2x" aria-hidden="true"/>
            </Link>
            <Link
              target="_blank"
              to="mailto:aditya.1998thakral@gmail.com">
              <div className="fa fa-envelope-square fa-2x" aria-hidden="true"/>
            </Link>
            <Link
              target="_blank"
              to="/static/AdityaThakralResume.pdf">
              <div className="fa fa-address-card fa-2x" aria-hidden="true"/>
            </Link>
          </div>
        </div>
        {!props.mobile &&
        <Stats
          jobs={props.jobs}
          projects={props.projects}/>
        }
        {!props.mobile && <Bio/>}
      </div>
    </div>
  );
};

const MiniPostContainer = (props) => {
  const renderMiniPostsRow = (i) => {
    let miniPostRow = [];
    for (let j = i * 3; j < (i * 3) + 3; j++) {
      if (props.miniPosts[j]) {
        miniPostRow.push(
          <Link key={j} to={`/post/${props.miniPosts[j].postID}`}>
            <MiniPost key={j} miniPost={props.miniPosts[j]}/>
          </Link>
        );
      } else {
        miniPostRow.push(<MiniPost key={j}/>);
      }
    }
    return miniPostRow;
  };

  let miniPosts = [];
  const numberOfRows = props.miniPosts.length / 3;
  for (let i = 0; i < numberOfRows; i++) {
    miniPosts.push(
      <div
        key={i}
        className="mini-post-row">
        {renderMiniPostsRow(i)}
      </div>
    );
  }
  return <div className="mini-post-container">{miniPosts}</div>;
};

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

  setMiniPosts = (data) => {
    const miniPosts = data.miniPosts;
    const numberOfJobs = data.numberOfJobs;
    const numberOfProjects = miniPosts.length;
    const numberOfNulls = numberOfProjects % 3;
    for (let i = 0; i < numberOfNulls; i++) {
      miniPosts.push(null);
    }
    this.setState({
      miniPosts,
      numberOfJobs,
      numberOfProjects
    });
  };

  componentDidMount() {
    axios.get('http://localhost:8080/api/miniPosts/profile')
      .then(response => this.setMiniPosts(response.data));
  }

  render() {
    return (
      <div className="profile-container">
        <Header
          mobile={this.state.mobile}
          jobs={this.state.numberOfJobs}
          projects={this.state.numberOfProjects}
          name="9at8"
          image="https://scontent.fyzd1-1.fna.fbcdn.net/v/t1.0-9/19366404_10207406972092966_677887742544187123_n.jpg?oh=2357c89dc95d8ac11fe3fe6b908858e6&oe=5A07F05F"/>
        {this.state.mobile && <Bio mobile={this.state.mobile}/>}
        {this.state.mobile &&
        <Stats
          mobile={this.state.mobile}
          jobs={this.state.numberOfJobs}
          projects={this.state.numberOfProjects}/>
        }
        {this.state.miniPosts && <MiniPostContainer miniPosts={this.state.miniPosts}/>}
      </div>
    );
  }
};

