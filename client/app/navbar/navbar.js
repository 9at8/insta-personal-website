import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchResults from './search-results';
import Hearts from './heart';
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
        <div className="search-box" style={{background: '#fff'}}>
          <div>
            <div className="search-icon">O</div>
            <input className="search"
                   placeholder="Search"/>
            <button className="close-search"
                    onClick={this.handleCloseClick}>x
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="search-box">
        <div onClick={this.handleBoxClick}>
          <div className="search-icon">O</div>
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

  button = (type, link) => {
    if (type === 'Heart') {
      return (
        <div
          className="nav-button"
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

  render() {
    return (
      <div className="hearts-container">
        <div className="nav-buttons-container">
          {this.button('Explore', '/explore')}
          {this.button('Heart')}
          {this.button('Profile', '/9at8')}
        </div>
        <Hearts show={this.state.isActive}/>
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
