import React from 'react';
import axios from 'axios';

import spinner from './../../public/spinner.gif';
import './popup.css';
import './heart.css';

const Result = (props) => {
  return (
    <div className="heart-result">
      <div className="heart-result-avatar">
        <img src={props.image}/>
      </div>
      <div className="heart-result-data">
        <div className="heart-result-data-text">{props.caption}</div>
        <button className="heart-result-data-button">Details</button>
      </div>
    </div>
  );
};

export default class Hearts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results: null};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/miniPosts')
      .then(results => this.setState({results: results.data}))
  }

  renderResults = () => {
    if (!this.state.results) {
      return (
        <div className="popup-results-main-container hearts-results-main-container">
          <div className="popup-loading-spinner">
            <img src={spinner}/>
          </div>
        </div>
      );
    } else {
      const results = this.state.results.map(result => {
        return (
          <Result
            image={result.image}
            caption={result.altText}/>
        );
      });
      return (
        <div className="popup-results-main-container hearts-results-main-container">
          {results}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="popup-results-wrapper hearts-results-wrapper">
        <div className="popup-results-pointer hearts-results-pointer">
        </div>
        <div className="popup-results-container hearts-results-container">
          {this.renderResults()}
        </div>
      </div>
    );
  }
}