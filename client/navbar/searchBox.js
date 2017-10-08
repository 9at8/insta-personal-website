import React from 'react'
import axios from 'axios'

import { SearchResults, SearchResultsPopup } from './search-results'
import { RandomMeme } from './../404/404'

import sprites from './../public/sprites.png'
import './searchBox.css'

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBox: true,
      query: '',
    }

    const width = window.innerWidth

    if (480 >= width && width >= 320) {
      this.state.mobile = true
    }
  }

  handleBoxClick = () => {
    if (!this.state.mobile) this.props.showSearch()
  }

  handleCloseClick = () => {
    this.setState({
      query: '',
      results: [],
    })
  }

  handleQueryChange = (event) => {
    const value = event.target.value
    this.setState({ query: value })
    if (value) {
      axios(`/api/search/posts?q=${value}`)
        .then(response => this.setState({ results: response.data }))
    }
  }

  box = () => {
    if (this.props.search || this.state.mobile) {
      return (
        <div
          className="search-box"
          style={{ background: '#fff' }}>
          <div>
            <div
              style={{ backgroundImage: `url(${sprites})` }}
              className="search-icon">
            </div>
            <input
              className="search"
              placeholder="Search"
              value={this.state.query}
              onChange={this.handleQueryChange}
              autoFocus/>
            <div
              style={{ backgroundImage: `url(${sprites})` }}
              className="close-search"
              onClick={this.handleCloseClick}>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="search-box">
        <div onClick={this.handleBoxClick}>
          <div
            style={{ backgroundImage: `url(${sprites})` }}
            className="search-icon">
          </div>
          <div>{this.state.query || 'Search'}</div>
        </div>
      </div>
    )
  }

  render() {
    if (this.props.history && !this.state.mobile) {
      this.props.history.push('ggwp')
    }
    return (
      <div className="search-container">
        {this.state.showBox && this.box()}
        {
          !this.state.mobile && this.props.search && this.state.query &&
          <SearchResultsPopup results={this.state.results}/>
        }
        {
          this.state.mobile && this.state.query &&
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
    )
  }
}