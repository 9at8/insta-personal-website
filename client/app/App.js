import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Navbar, NavbarMobile} from './navbar/navbar';
import Home from './home/home';
import SearchBox from './navbar/searchBox';
import Explore from './explore/explore';
import Hearts from './navbar/heart';
import Profile from './profile/profile';
import Post from './post/post';
import NotFound from './404/404';

import './../public/font-awesome-4.7.0/css/font-awesome.min.css';

const App = (props) => {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={SearchBox}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/activity" component={Hearts}/>
          <Route path="/9at8" component={Profile}/>
          <Route path="/post/:postID" component={Post}/>
          <Route path="/:something" component={NotFound}/>
        </Switch>
      </div>
      <NavbarMobile/>
    </div>
  );
};

export default App;
