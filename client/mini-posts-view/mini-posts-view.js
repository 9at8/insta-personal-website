import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import MiniPost from './mini-post'
import './mini-posts-view.css'

const Stats = (props) => {
  const mobile = props.mobile ? '-mobile' : ''
  return (
    <div className={`mini-posts-view-header-info-stats${mobile}`}>
      <Link
        className="mini-posts-view-header-jobs"
        to="/explore">
        <div><b>{props.jobs}</b></div>
        <div className="mini-posts-view-header-jobs-text">jobs</div>
      </Link>
      <Link
        className="mini-posts-view-header-jobs"
        to="/9at8">
        <div><b>{props.projects}</b></div>
        <div className="mini-posts-view-header-jobs-text">projects</div>
      </Link>
      <Link
        className="mini-posts-view-header-jobs"
        to="/">
        <div><b>∞</b></div>
        <div className="mini-posts-view-header-jobs-text">fun</div>
      </Link>
    </div>
  )
}

const Bio = (props) => {
  const mobile = props.mobile ? '-mobile' : ''
  return (
    <div className={`mini-posts-view-header-info-bio${mobile}`}>
      {/*<p><Links/></p>*/}
      {/*<p>Your friendly neighborhood web developer!</p>*/}
      {/*<p>I am always excited to learn new things, fun to work with, and a meme-lover*/}
        {/*studying Computer Science at the University of Waterloo.</p>*/}
      {/*<p>Oh, I am also looking for a job for the Winter 2018 term!</p>*/}
      {/*<p>Look out for memes and puns!</p>*/}
      <p>I am your friendly neighborhood web developer! 🕸 I am always excited to learn new things. I love memes 🐸 and I am fun to work with! 👨‍💻</p>
      <p>Sophomore 👨‍🎓 ‍Computer Science @ University of Waterloo 🦆</p>
    </div>
  )
}

const Links = (props) => {
  return (
    <div className="mini-posts-view-header-links">
      <Link
        target="_blank"
        to="https://www.linkedin.com/in/99at8">
        <div className="fa fa-linkedin-square" aria-hidden="true"/>
      </Link>
      <Link
        target="_blank"
        to="https://github.com/9at8">
        <div className="fa fa-github-square" aria-hidden="true"/>
      </Link>
      <Link
        target="_blank"
        to="mailto:aditya.1998thakral@gmail.com">
        <div className="fa fa-envelope-square" aria-hidden="true"/>
      </Link>
      <Link
        target="_blank"
        to="/static/AdityaThakralResume.pdf">
        <div className="fa fa-address-card" aria-hidden="true"/>
      </Link>
    </div>
  )
}

const Header = (props) => {
  return (
    <div className="mini-posts-view-header">
      <div className="mini-posts-view-header-image">
        <img src={props.image}/>
      </div>
      <div className="mini-posts-view-header-info">
        {!props.mobile &&
        <Stats
          jobs={props.jobs}
          projects={props.projects}/>
        }
        {!props.mobile && <Bio/>}
      </div>
    </div>
  )
}

const MiniPostContainer = (props) => {
  const renderMiniPostsRow = (i) => {
    let miniPostRow = []
    for (let j = i * 3; j < (i * 3) + 3; j++) {
      if (props.miniPosts[ j ]) {
        miniPostRow.push(
          <Link key={j} to={`/post/${props.miniPosts[ j ].postID}`}>
            <MiniPost key={j} miniPost={props.miniPosts[ j ]}/>
          </Link>,
        )
      } else {
        miniPostRow.push(<MiniPost key={j}/>)
      }
    }
    return miniPostRow
  }

  let miniPosts = []
  const numberOfRows = props.miniPosts.length / 3
  for (let i = 0; i < numberOfRows; i++) {
    miniPosts.push(
      <div
        key={i}
        className="mini-post-row">
        {renderMiniPostsRow(i)}
      </div>
    )
  }
  return <div className="mini-post-container">{miniPosts}</div>
}

export default class MiniPostsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    const width = window.innerWidth

    if (480 >= width && width >= 320) {
      this.state.mobile = true
    } else {
      this.state.mobile = false
    }
  }

  setStats = (stats) => {
    this.setState(stats)
  }

  setMiniPosts = (miniPosts) => {
    const numberOfPosts = miniPosts.length
    const numberOfNulls = numberOfPosts % 3
    for (let i = 0; i < numberOfNulls; i++) {
      miniPosts.push(null)
    }
    this.setState({ miniPosts })
  }

  componentDidMount() {
    axios.get('/api/stats')
      .then(response => this.setStats(response.data))
    axios.get('/api/miniPosts/life-story')
      .then(response => this.setMiniPosts(response.data))
  }

  render() {
    return (
      <div className="mini-posts-view-container">
        <Header
          mobile={this.state.mobile}
          jobs={this.state.numberOfJobs}
          projects={this.state.numberOfProjects}
          image="https://scontent.fyzd1-1.fna.fbcdn.net/v/t1.0-9/19366404_10207406972092966_677887742544187123_n.jpg?oh=2357c89dc95d8ac11fe3fe6b908858e6&oe=5A07F05F"/>
          {/*image="/static/images/profile/science-project.png"/>*/}
        {this.state.mobile && <Bio mobile={this.state.mobile}/>}
        {this.state.mobile &&
          <Stats
            mobile={this.state.mobile}
            jobs={this.state.numberOfJobs}
            projects={this.state.numberOfProjects}/>
        }
        {this.state.miniPosts && <MiniPostContainer miniPosts={this.state.miniPosts}/>}
      </div>
    )
  }
};

