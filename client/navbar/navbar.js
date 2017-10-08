import React from 'react'
import { Link } from 'react-router-dom'

import { Buttons, MobileButtons } from './buttons'
import SearchBox from './searchBox'

import './../public/fonts/billabong.ttf'
import './navbar.css'

const Header = () => {
  return (
    <div className="nav-header">
      <Link to="/">
        <div className="fa fa-instagram fa-1x navbar-logo"/>
        <span/> Aditya Thakral
      </Link>
    </div>
  )
}

export const NavbarMobile = () => {
  return (
    <div className="navbar-bottom-mobile">
      <MobileButtons/>
    </div>
  )
}

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: false,
      prev: 0,
      search: props.search,
      activity: props.activity,
    }
  }

  hideNavbar = () => {
    let isHidden = this.state.isHidden
    let curr = window.scrollY
    if (this.state.search !== true) {
      if (curr > this.state.prev && curr > 75) {
        if (!isHidden) this.setState({ isHidden: true })
      } else if (isHidden) this.setState({ isHidden: false })
    }
    this.setState({ prev: curr })
  }

  //closeResults = () => {
  //  this.setState({ search: false, activity: false })
  //}
  //
  //search = () => {
  //  this.setState({ search: true })
  //}
  //
  //hideSearchResults = () => {
  //  this.setState({ search: false })
  //}
  //
  //activity = () => {
  //  this.setState({ activity: true })
  //}
  //
  //hideHearts = () => {
  //  this.setState({ activity: false })
  //}

  componentDidMount() {
    window.addEventListener('scroll', this.hideNavbar)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNavbar)
  }

  render() {
    let className = 'navbar'
    if (this.state.isHidden && !this.props.search && !this.props.activity) className += ' hide-nav'
    return (
      <div className={className}>
        <div>
          <Header/>
          <SearchBox
            search={this.props.search}
            showSearch={this.props.showSearch}/>
          <Buttons
            activity={this.props.activity}
            showActivity={this.props.showActivity}/>
        </div>
      </div>
    )
  }
}
