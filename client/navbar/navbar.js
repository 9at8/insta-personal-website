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
      showSearchResults: false,
      showHearts: false,
    }
  }

  hideNavbar = () => {
    let isHidden = this.state.isHidden
    let curr = window.scrollY
    if (this.state.showSearchResults !== true) {
      if (curr > this.state.prev && curr > 75) {
        if (!isHidden) this.setState({ isHidden: true })
      } else if (isHidden) this.setState({ isHidden: false })
    }
    this.setState({ prev: curr })
  }

  closeResults = () => {
    this.setState({ showSearchResults: false, showHearts: false })
  }

  showSearchResults = () => {
    this.setState({ showSearchResults: true })
  }

  hideSearchResults = () => {
    this.setState({ showSearchResults: false })
  }

  showHearts = () => {
    this.setState({ showHearts: true })
  }

  hideHearts = () => {
    this.setState({ showHearts: false })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideNavbar)
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.hideNavbar)
  }

  render() {
    let className = 'navbar'
    if (this.state.isHidden) className += ' hide-nav'
    return (
      <div className={className}>
        <div>
          <Header/>
          <SearchBox
            showSearchResults={this.showSearchResults}
            hideSearchResults={this.hideSearchResults}/>
          <Buttons
            showHearts={this.showHearts}
            hideHearts={this.hideHearts}/>
        </div>
      </div>
    )
  }
}