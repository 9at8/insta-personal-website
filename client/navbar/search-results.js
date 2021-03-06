import React from 'react'
import { Link } from 'react-router-dom'

import './popup.css'
import './search-results.css'

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
      <div className="search-result">
        <div className="search-result-avatar-container">
          <img
            className="search-result-avatar"
            onLoad={this.onImageLoad}
            style={!this.state.imageLoaded ? { display: 'none' } : {}}
            src={this.props.image}/>
        </div>
        <div className="search-result-data">
          <div className="search-result-data-caption">{this.props.caption}</div>
        </div>
      </div>
    )
  }
}


export const SearchResults = (props) => {
  if (props.results && props.results.length > 0) {
    return (
      <div className="popup-results-main-container search-results-main-container">
        {props.results.map((result) => {
          return (
            <Link to={`/post/${result.postID}`}>
              <Result
                image={result.image}
                caption={result.altText}/>
            </Link>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="popup-results-main-container search-results-main-container search-results-no-results">
        <span>No results found.</span>
      </div>
    )
  }
}

export const SearchResultsPopup = (props) => {
  return (
    <div className="popup-results-wrapper search-results-wrapper">
      <div className="popup-results-pointer search-results-pointer"/>
      <div className="popup-results-container search-results-container">
        <SearchResults {...props}/>
      </div>
    </div>
  )
}
