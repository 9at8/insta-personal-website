import React from 'react';
import ReactDOM from 'react-dom';

import Post from './post/post';

import './index.css';

class App extends React.Component {
  render() {
    let time = '1540';
    let postObject = {
      author: {
        name: '9at8',
        avatar: 'https://avatars0.githubusercontent.com/u/8235156'
      },
      location: 'Home',
      time: time,
      image: 'https://avatars0.githubusercontent.com/u/8235156',
      caption: 'test caption bitches',
      likes: ['user1', 'user2', 'user3'],
      comments: [
        {
          user: 'user1',
          comment: 'comment from user1',
          time: time
        }, {
          user: 'user2',
          comment: 'comment from user2',
          time: time
        }, {
          user: 'user3',
          comment: 'comment from user3',
          time: time
        }, {
          user: 'user4',
          comment: 'comment from user4',
          time: time
        }, {
          user: 'user5',
          comment: 'comment from user5',
          time: time
        }, {
          user: 'user6',
          comment: 'comment from user6',
          time: time
        }
      ]
    };
    return (
      <div>
        <Post post={postObject}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app')
);