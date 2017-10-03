import React from 'react'
import axios from 'axios'

import Post from './../post/post'

import './posts-view.css'

export default class PostsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: null }
  }

  getHomePosts = () => {
    return (
      this.state.posts.map((post) => <Post key={post._id} post={post}/>)
    )
  }

  componentDidMount() {
    axios.get('/api/posts/project')
      .then(response => this.setState({ posts: response.data }))
  }

  render() {
    return (
      <div className="posts-view">
        {this.state.posts && this.getHomePosts()}
      </div>
    )
  }
}
