import React from 'react'
import axios from 'axios'

import Experience from './experience'
import './explore.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: null,
    }

    props.loadData
      .then(results => this.setState({ results }))
  }

  getExperiences = () => {
    return (
      <div className="experiences">
        {this.state.results.map((result) => {
          return (
            <Experience
              image={result.image}
              caption={result.altText}
              position={result.position}
              postID={result.postID}/>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="explore-container">
        {this.state.results && this.getExperiences()}
      </div>
    )
  }
}
