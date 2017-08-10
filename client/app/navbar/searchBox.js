import React from 'react';
import axios from 'axios';

import {SearchResults, SearchResultsPopup} from './search-results';
import {RandomMeme} from './../404/404';

import sprites from './../../public/sprites.png';
import './searchBox.css';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      showSearchResults: false,
      showBox: true,
      query: ''
    };

    const width = window.innerWidth;

    if (480 >= width && width >= 320) {
      this.state.mobile = true;
    } else if (!(this.props.showSearchResults && this.props.hideSearchResults)) {
      this.state.showBox = false;
    }
  }

  handleBoxClick = () => {
    if (!this.state.mobile) this.props.showSearchResults();
    this.setState({isActive: true, showSearchResults: true});
  };

  handleCloseClick = () => {
    if (!this.state.mobile) this.props.hideSearchResults();
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
      axios(`http://localhost:8080/api/search/posts?q=${value}`)
        .then(response => this.setState({results: response.data}));
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
        {this.state.showBox && this.box()}
        {
          !this.state.mobile && this.state.showSearchResults && this.state.query &&
          <SearchResultsPopup results={this.state.results}/>
        }
        {
          this.state.mobile && this.state.showSearchResults && this.state.query &&
          <SearchResults results={this.state.results}/>
        }
        {
          this.state.mobile && !this.state.query &&
          <div className="search-meme-container">
            <div>Don't know what to search, here's a gif!</div>
            <RandomMeme tag="search"/>
          </div>
        }
      </div>
    );
  }
}