import React from 'react';

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
      </div>
    );
  }
};

