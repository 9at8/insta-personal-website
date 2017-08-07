import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {Buttons, MobileButtons} from './buttons';
import SearchResults from './search-results';

import sprites from './../../public/sprites.png';

import './../../public/fonts/billabong.ttf';
import './navbar.css';
import './../../public/font-awesome-4.7.0/css/font-awesome.min.css';

const Header = () => {
  return (
    <div className="nav-header">
      <Link to="/">
        <div className="fa fa-instagram fa-1x navbar-logo"> </div>
        <span> </span> Aditya Thakral
      </Link>
    </div>
  );
};

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      showSearchResults: false,
      query: ''
    };
  }

  handleBoxClick = () => {
    this.props.showSearchResults();
    this.setState({isActive: true, showSearchResults: true});
  };

  handleCloseClick = () => {
    this.props.hideSearchResults();
    this.setState({
      isActive: false,
      showSearchResults: false,
      query: '',
      results: []
    });
  };

  handleQueryChange = (event) => {
    const value = event.target.value;
    this.setState({query: value});
    if (value) {
      axios(`http://localhost:8080/api/search/posts/${value}`)
        .then(response => this.setState({results: response.data}))
    }
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
              placeholder="Search"
              value={this.state.query}
              onChange={(event) => this.handleQueryChange(event)}
              autoFocus/>
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
          <div>{this.state.query || 'Search'}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="search-container">
        {this.box()}
        {this.state.showSearchResults && this.state.query && <SearchResults results={this.state.results}/>}
      </div>
    );
  }
}

export const NavbarMobile = () => {
  return (
    <div className="navbar-bottom-mobile">
      <MobileButtons/>
    </div>
  );
};

export class Navbar extends React.Component {
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
          <Buttons
            showHearts={this.showHearts}
            hideHearts={this.hideHearts}/>
        </div>
      </div>
    );
  }
}
