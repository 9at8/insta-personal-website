import React from 'react'

import sprites from './../public/sprites.png'
import './mini-post.css'

export default class MiniPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imageLoaded: false }
  }

  onImageLoad = (e) => {
    this.setState({ imageLoaded: true })
  }

  render() {
    let background = this.state.imageLoaded
      ? `no-repeat center/auto 100% url(${this.props.miniPost.image})`
      : `no-repeat center/auto 100% #eeeeee`
    return (
      <div
        className="mini-post"
        style={{ background }}>
        <img
          src={this.props.miniPost.image}
          onLoad={this.onImageLoad}
          style={{ display: 'none' }}/>
        <div className="mini-post-overlay">
          <div style={{ backgroundImage: `url(${sprites})` }}/>
          <span>{this.props.miniPost.likes}</span>
          <span>{this.props.miniPost.comments}</span>
        </div>
      </div>
    )
  }
}