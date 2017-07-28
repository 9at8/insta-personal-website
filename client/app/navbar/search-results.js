import React from 'react';

import spinner from './../../public/spinner.gif';
import './popup.css';
import './search-results.css';

const Result = (props) => {
  return (
    <div className="search-result">
      <img className="search-result-avatar" src="https://avatars0.githubusercontent.com/u/8235156"/>
      <div className="search-result-data">
        <div className="search-result-data-caption">Hello</div>
        <div className="search-result-data-description">World</div>
      </div>
    </div>
  );
};

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderResults = () => {
    if (!this.state.results) {
      return (
        <div className="popup-results-main-container search-results-main-container">
          <div className="popup-loading-spinner">
            <img src={spinner}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="popup-results-main-container search-results-main-container">
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
      <div className="popup-results-wrapper search-results-wrapper" style={style}>
        <div className="popup-results-pointer search-results-pointer"> </div>
        <div className="popup-results-container search-results-container">
          {this.renderResults()}
        </div>
      </div>
    );
  }
}