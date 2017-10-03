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

  componentDidMount() {
    axios.get('/api/miniPosts/experience')
      .then(response => this.setState({ results: response.data }))
  }

  render() {
    return (
      <div className="explore-container">
        {this.state.results && this.getExperiences()}
      </div>
    )
  }
}
