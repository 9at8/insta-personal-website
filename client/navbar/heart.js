import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import DetailsButton from './../explore/details-button'

import spinner from './../public/spinner.gif'
import './popup.css'
import './heart.css'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imageLoaded: false }
  }

  onImageLoad = () => {
    this.setState({ imageLoaded: true })
  }

  render() {
    return (
      <div className="heart-result">
        <div className="heart-result-avatar">
          <img
            onLoad={this.onImageLoad}
            style={!this.state.imageLoaded ? { display: 'none' } : {}}
            src={this.props.image}/>
        </div>
        <div className="heart-result-data">
          <div className="heart-result-data-text">{this.props.caption}</div>
          <Link
            to={this.props.details}>
            <DetailsButton text="More"/>
          </Link>
        </div>
      </div>
    )
  }
}

export default class Hearts extends React.Component {
  constructor(props) {
    super(props)
    this.state = { results: null }
    if (this.props.match) {
      this.state.standalone = true
    }

    const width = window.innerWidth
    if (!(320 <= width && width <= 480)) {
      this.props.history.push('ggwp')
    }
  }

  componentDidMount() {
    axios.get('/api/miniPosts')
      .then(results => this.setState({ results: results.data }))
  }

  renderResults = () => {
    if (!this.state.results) {
      return (
        <div className="popup-results-main-container hearts-results-main-container">
          <div className="popup-loading-spinner">
            <img src={spinner}/>
          </div>
        </div>
      )
    } else {
      const results = this.state.results.map(result => {
        let details = `/post/${result.postID}`
        return (
          <Result
            image={result.image}
            caption={result.altText}
            details={details}/>
        )
      })
      return (
        <div className="popup-results-main-container hearts-results-main-container">
          {results}
        </div>
      )
    }
  }

  render() {
    if (this.state.standalone) {
      return (
        <div className="popup-results-container hearts-results-container">
          {this.renderResults()}
        </div>
      )
    }
    return (
      <div className="popup-results-wrapper hearts-results-wrapper">
        <div className="popup-results-pointer hearts-results-pointer">
        </div>
        <div className="popup-results-container hearts-results-container">
          {this.renderResults()}
        </div>
      </div>
    )
  }
}