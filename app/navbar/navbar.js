import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './navbar.css';


// Header Component ---------------------

const Header = (props) => {
  return (
    <div className="nav-header">
      <Link to="/">
        LOGO | Aditya
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
      isActive: false
    };
  }

  handleBoxClick = () => {
    this.setState({isActive: true});
  };

  handleCloseClick = () => {
    this.setState({isActive: false});
  };

  box = () => {
    if (this.state.isActive) {
      return (
        <div>
          <div className="search-icon">O</div>
          <input className="search"
                 placeholder="Search"/>
          <button className="close-search"
                  onClick={this.handleCloseClick}>x
          </button>
        </div>
      );
    }
    return (
      <div onClick={this.handleBoxClick}>
        <div className="search-icon">O</div>
        <div>Search</div>
      </div>
    );
  };

  render() {
    return (
      <div className="search-box">
        {this.box()}
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
      isActive: true
    };
  }

  button = (type, link) => {
    if (type === 'Heart') {
      return (
        <div className="nav-button"
             onClick={this.handleHeartClick}>
          {type}
        </div>
      );
    }
    return (
      <div className="nav-button">
        <Link to={link}>
          {type}
        </Link>
      </div>
    );
  };

  handleHeartClick = (type) => {
    if (type !== 'Heart') return;
    this.setState((oldState) => {
      return {
        isActive: !oldState.isActive
      };
    });
  };

  render() {
    return (
      <div className="nav-buttons">
        {this.button('Explore', '/explore')}
        {this.button('Heart', '')}
        {this.button('Profile', '/profile')}
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
      prev: 0
    }
  }

  hideNavbar = () => {
    let isHidden = this.state.isHidden;
    let curr = window.scrollY;
    if (curr > this.state.prev && curr > 75) {
      if (!isHidden) this.setState({isHidden: true});
    } else if (isHidden) this.setState({isHidden: false});
    this.setState({prev: curr});
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
          <SearchBox/>
          <NavButtons/>
        </div>
      </div>
    );
  }
}

// --------------------------------------
