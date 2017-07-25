import React from 'react';

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

  render() {
    let style = {display: 'none'};
    if (this.props.show === true) style = {};
    return (
      <div className="search-results-wrapper" style={style}>
        <div className="search-results-pointer"> </div>
        <div className="search-results-container">
          <div className="search-results-main-container">
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
        </div>
      </div>
    );
  }
}