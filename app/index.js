import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './navbar/navbar';
import Home from './home/home';
import Explore from './explore/explore';
import Profile from './profile/profile';
import SearchResults from './search-results/search-results';
import NotFound from './404/404';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="posts">
          <Navbar/>
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/explore" component={Explore}/>
              <Route path="/search-results" component={SearchResults}/>
              <Route path="/:username" component={Profile}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app')
);