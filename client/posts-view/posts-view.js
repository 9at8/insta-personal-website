import React from 'react'
import axios from 'axios'

import Post from './../post/post'

import './posts-view.css'

export default class PostsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: null }
    props.loadData
      .then(posts => this.setState({ posts }))
  }

  getHomePosts = () => {
    return (
      this.state.posts.map((post) => <Post key={post._id} post={post}/>)
    )
  }

  render() {
    return (
      <div className="posts-view">
        {this.state.posts && this.getHomePosts()}
      </div>
    )
  }
}
