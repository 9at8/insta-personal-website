import React from 'react'
import axios from 'axios'

import './404.css'

export class RandomMeme extends React.Component {
  constructor(props) {
    super(props)
    this.state = { image: null }
  }

  componentDidMount() {
    axios.get(`/api/meme/${this.props.tag}`)
      .then(data => this.setState({ image: data.data.image }))
  }

  render() {
    return (
      <img
        className="meme-image"
        src={this.state.image}/>
    )
  }
}

const NotFound = () => {
  return (
    <div className="meme-page">
      <h2>404: Page not found</h2>
      <h2>Wait! Here's a random meme for you!</h2>
      <RandomMeme tag="random"/>
    </div>
  )
}

export default NotFound
