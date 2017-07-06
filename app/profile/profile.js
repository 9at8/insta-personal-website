import React from 'react';


const Profile = (props) => {
  return (
    <div>
      <h1>{props.match.params.username}'s PROFILE COMPONENT!</h1>
    </div>
  );
};

export default Profile;
