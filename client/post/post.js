import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Response from './response'

import './post.css'

const Header = (props) => {
  const linkToLocation = () => {
    return <a href={props.location.website}>{props.location.text}</a>
  }

  return (
    <div className="post-header">
      <img
        className="post-avatar"
        src={props.author.avatar}/>
      <div>
        <span><b>{props.author.name}</b></span>
        <span>{!!props.location && linkToLocation()}</span>
      </div>
    </div>
  )
}

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.post
    const width = window.innerWidth

    if (!this.props.post) {
      this.state = {}
      this.state.standalone = true
      this.props.loadData
        .then(data => this.setState(data))
        .catch(err => this.props.history.push('/ggwp'))
    }

    if (480 >= width && width >= 320) {
      this.state.standalone = false
      this.state.mobile = true
    }

    this.state.isLiked = false

    this.state.imageLoaded = false
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match && this.props.match.params.postID !== prevProps.match.params.postID) {
      this.props.loadData
        .then(data => {
          data.isLiked = false
          this.setState(data)
        })
    }
  }

  toggleLike = () => {
    this.setState((oldState) => {
      return {
        likes: this.state.isLiked ? oldState.likes - 1 : oldState.likes + 1,
        isLiked: !oldState.isLiked,
      }
    })

    axios.put(`/api/post/${this.state._id}`, {
      likes: this.state.isLiked ? -1 : 1,
    })
  }

  onImageLoad = (e) => {
    this.setState({ imageLoaded: true })
  }

  renderStandalonePost = () => {
    if (this.state.image) {
      return (
        <div className="post-standalone">
          <div
            className="post-standalone-picture-container"
            onDoubleClick={() => this.toggleLike()}>
            <div
              className="post-standalone-picture-load"
              style={this.state.imageLoaded ? { display: 'none' } : {}}/>
            <img
              className="post-standalone-picture"
              style={!this.state.imageLoaded ? { display: 'none' } : {}}
              onLoad={this.onImageLoad}
              src={this.state.image}
              alt={this.state.caption}/>
          </div>
          <div className="post-standalone-container">
            <Header
              author={this.state.author}
              location={this.state.location}/>
            <Response
              standalone={true}
              isLiked={this.state.isLiked}
              toggleLike={() => this.toggleLike()}
              likes={this.state.likes}
              author={this.state.author}
              caption={this.state.caption}
              comments={this.state.comments}
              time={this.state.time}/>
          </div>
        </div>
      )
    }
  }

  render() {
    if (!this.state.standalone && this.state.image) {
      return (
        <div className="post">
          <Header
            author={this.state.author}
            location={this.state.location}/>
          <div
            className="post-picture-load"
            style={this.state.imageLoaded ? { display: 'none' } : {}}/>
          <img
            className="post-picture"
            style={!this.state.imageLoaded ? { display: 'none' } : {}}
            onLoad={this.onImageLoad}
            onDoubleClick={() => this.toggleLike()}
            src={this.state.image}
            alt={this.state.caption}/>
          <Response
            isLiked={this.state.isLiked}
            toggleLike={() => this.toggleLike()}
            likes={this.state.likes}
            author={this.state.author}
            caption={this.state.caption}
            comments={this.state.comments}
            time={this.state.time}/>
        </div>
      )
    } else {
      return (
        <div className="post-standalone-wrapper">
          {this.renderStandalonePost()}
        </div>
      )
    }
  }
}

Post.propTypes = {
  post: PropTypes.shape(
    {
      author: PropTypes.shape(
        {
          name: PropTypes.string,
          avatar: PropTypes.string,
        }).isRequired,
      location: PropTypes.shape(
        {
          text: PropTypes.string.isRequired,
          website: PropTypes.string.isRequired,
        },
      ),
      time: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.arrayOf(PropTypes.shape(
        {
          user: PropTypes.string.isRequired,
          comment: PropTypes.string.isRequired,
        })).isRequired,
    },
  ),
}
