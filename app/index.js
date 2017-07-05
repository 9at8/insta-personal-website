import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './navbar/navbar';
import Home from './home';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="posts">
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app')
);