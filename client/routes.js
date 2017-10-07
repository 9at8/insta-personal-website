import axios from 'axios'

import MiniPostsView from './mini-posts-view/mini-posts-view'
import PostsView from './posts-view/posts-view'
import SearchBox from './navbar/searchBox'
import Explore from './explore/explore'
import Hearts from './navbar/heart'
import Post from './post/post'
import NotFound from './404/404'

const routes = [
  {
    path: '/',
    exact: true,
    component: MiniPostsView,
    loadData: (props) => {
      return {
        lifeStory: axios.get('/api/miniPosts/life-story')
          .then(response => response.data),
        stats: axios.get('/api/stats')
          .then(response => response.data),
      }
    },
  },
  {
    path: '/9at8',
    component: PostsView,
    loadData: (props) => {
      return axios.get('/api/posts/project')
        .then(response => response.data)
    },
  },
  {
    path: '/search',
    component: SearchBox,
    loadData: (props) => {
      return {}
    },
  },
  {
    path: '/explore',
    component: Explore,
    loadData: (props) => {
      return axios.get('/api/miniPosts/experience')
        .then(response => response.data)
    },
  },
  {
    path: '/activity',
    component: Hearts,
    loadData: (props) => {
      return {}
    },
  },
  {
    path: '/post/:postID',
    component: Post,
    loadData: (props) => {
      return axios.get(`/api/post/${props.match.params.postID}`)
        .then(response => response.data)
    },
  },
  {
    path: '/',
    component: NotFound,
    loadData: (props) => {
      return {}
    },
  },
]

export default routes