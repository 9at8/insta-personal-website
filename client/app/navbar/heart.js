import React from 'react';

import spinner from './../../public/spinner.gif';
import './popup.css';
import './heart.css';

const Result = (props) => {
  return (
    <div className="heart-result">
      <div className="heart-result-avatar">
        <img src="https://avatars0.githubusercontent.com/u/8235156"/>
      </div>
      <div className="heart-result-data">
        <div className="heart-result-data-text">Hello</div>
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
      return (
        <div className="popup-results-main-container hearts-results-main-container">
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
          <Result/>
        </div>
      );
    }
  };

  render() {
    let style = {display: 'none'};
    if (this.props.show === true) style = {};
    return (
      <div className="popup-results-wrapper hearts-results-wrapper" style={style}>
        <div className="popup-results-pointer hearts-results-pointer">
        </div>
        <div className="popup-results-container hearts-results-container">
          {this.renderResults()}
        </div>
      </div>
    );
  }
}