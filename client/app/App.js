import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Navbar, NavbarMobile} from './navbar/navbar';
import Home from './home/home';
import Explore from './explore/explore';
import Profile from './profile/profile';
import Post from './post/post';
import NotFound from './404/404';


const App = (props) => {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/9at8" component={Profile}/>
          <Route path="/post/:postID" component={Post}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      <NavbarMobile/>
    </div>
  );
};

export default App;
