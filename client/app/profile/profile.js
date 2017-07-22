import React from 'react';

import './profile.css';

const Header = (props) => {
  return (
    <div className="profile-header">
      <img src={props.image}/>
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
        <Header image="https://scontent.fyzd1-1.fna.fbcdn.net/v/t1.0-9/19366404_10207406972092966_677887742544187123_n.jpg?oh=2357c89dc95d8ac11fe3fe6b908858e6&oe=5A07F05F"/>
      </div>
    )
  }
};

