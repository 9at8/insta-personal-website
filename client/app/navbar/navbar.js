import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchResults from './search-results';
import Hearts from './heart';

import sprites from './../../public/sprites.png';

import './../../public/fonts/billabong.ttf';
import './navbar.css';
import './../../public/font-awesome-4.7.0/css/font-awesome.min.css';


// Header Component ---------------------

const Header = (props) => {
  return (
    <div className="nav-header">
      <Link to="/">
        <div className="fa fa-instagram fa-1x navbar-logo"> </div>
        <span> </span> Aditya Thakral
      </Link>
    </div>
  );
};

// --------------------------------------


// Search Box Component -----------------

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      showSearchResults: false
    };
  }

  handleBoxClick = () => {
    this.props.showSearchResults();
    this.setState({isActive: true, showSearchResults: true});
  };

  handleCloseClick = () => {
    this.props.hideSearchResults();
    this.setState({isActive: false, showSearchResults: false});
  };

  box = () => {
    if (this.state.isActive) {
      return (
        <div
          className="search-box"
          style={{background: '#fff'}}>
          <div>
            <div
              style={{backgroundImage: `url(${sprites})`}}
              className="search-icon">
            </div>
            <input
              className="search"
              placeholder="Search"/>
            <div
              style={{backgroundImage: `url(${sprites})`}}
              className="close-search"
              onClick={this.handleCloseClick}>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="search-box">
        <div onClick={this.handleBoxClick}>
          <div
            style={{backgroundImage: `url(${sprites})`}}
            className="search-icon">
          </div>
          <div>Search</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="search-container">
        {this.box()}
        <SearchResults show={this.state.showSearchResults}/>
      </div>
    );
  }
}

// --------------------------------------


// Buttons Component --------------------

class NavButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleHeartClick = () => {
    this.setState((oldState) => {
      return {
        isActive: !oldState.isActive
      };
    });
  };

  render() {
    return (
      <div className="hearts-container">
        <div className="nav-buttons-container">
          <div className="nav-button">
            <Link to="/explore">
              <div
                style={{backgroundImage: `url(${sprites})`}}
                className="nav-button-common nav-button-explore">
              </div>
            </Link>
          </div>
          <div
            className="nav-button"
            onClick={this.handleHeartClick}>
            <div
              style={{backgroundImage: `url(${sprites})`}}
              className="nav-button-common nav-button-heart">
            </div>
          </div>
          <div className="nav-button">
            <Link to="/9at8">
              <div
                style={{backgroundImage: `url(${sprites})`}}
                className="nav-button-common nav-button-profile">
              </div>
            </Link>
          </div>
        </div>
        {this.state.isActive && <Hearts/>}
      </div>
    );
  }
}

// --------------------------------------


// Navbar Component ---------------------

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      prev: 0,
      showSearchResults: false,
      showHearts: false
    };
  }

  hideNavbar = () => {
    let isHidden = this.state.isHidden;
    let curr = window.scrollY;
    //if (!(this.state.showSearchResults || this.state.showHearts)) {
    if (this.state.showSearchResults !== true) {
      if (curr > this.state.prev && curr > 75) {
        if (!isHidden) this.setState({isHidden: true});
      } else if (isHidden) this.setState({isHidden: false});
    }
    this.setState({prev: curr});
  };

  closeResults = () => {
    this.setState({showSearchResults: false, showHearts: false});
  };

  showSearchResults = () => {
    this.setState({showSearchResults: true});
  };

  hideSearchResults = () => {
    this.setState({showSearchResults: false});
  };

  showHearts = () => {
    this.setState({showHearts: true});
  };

  hideHearts = () => {
    this.setState({showHearts: false});
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hideNavbar);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.hideNavbar);
  }

  render() {
    let className = 'navbar';
    if (this.state.isHidden) className += ' hide-nav';
    return (
      <div className={className}>
        <div>
          <Header/>
          <SearchBox
            showSearchResults={this.showSearchResults}
            hideSearchResults={this.hideSearchResults}/>
          <NavButtons
            showHearts={this.showHearts}
            hideHearts={this.hideHearts}/>
        </div>
      </div>
    );
  }
}

// --------------------------------------
