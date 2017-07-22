import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './navbar/navbar';
import Home from './home/home';
import Explore from './explore/explore';
import Profile from './profile/profile';
import SearchResults from './search-results/search-results';
import Post from './post/post';


const App = (props) => {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/search-results" component={SearchResults}/>
          <Route path="/9at8" component={Profile}/>
          <Route path="/post/:postID" component={Post}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
