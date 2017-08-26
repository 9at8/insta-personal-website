import React from 'react'
import { NavLink } from 'react-router-dom'

import Hearts from './heart'

import sprites from './../../public/sprites.png'
import './buttons.css'

const backgroundImageSpriteStyle = {
  backgroundImage: `url(${sprites})`,
}

const Home = () => {
  return (
    <div className="nav-button">
      <NavLink
        to="/"
        activeClassName="nav-button-home-active"
        exact>
        <div
          style={backgroundImageSpriteStyle}
          className="nav-button-common nav-button-home">
        </div>
      </NavLink>
    </div>
  )
}

const Search = () => {
  return (
    <div className="nav-button">
      <NavLink
        to="/search"
        activeClassName="nav-button-search-active">
        <div
          style={backgroundImageSpriteStyle}
          className="nav-button-common nav-button-search">
        </div>
      </NavLink>
    </div>
  )
}

const Explore = (props) => {
  return (
    <div className="nav-button">
      <NavLink
        to="/explore"
        activeClassName="nav-button-explore-active">
        <div
          style={backgroundImageSpriteStyle}
          className="nav-button-common nav-button-explore">
        </div>
      </NavLink>
    </div>
  )
}

const Heart = (props) => {
  return (
    <div className="nav-button">
      <NavLink
        to="/activity"
        activeClassName="nav-button-heart-active">
        <div
          style={backgroundImageSpriteStyle}
          className="nav-button-common nav-button-heart">
        </div>
      </NavLink>
    </div>
  )
}

const Profile = (props) => {
  return (
    <div className="nav-button">
      <NavLink
        to="/9at8"
        activeClassName="nav-button-profile-active">
        <div
          style={backgroundImageSpriteStyle}
          className="nav-button-common nav-button-profile">
        </div>
      </NavLink>
    </div>
  )
}

export class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  handleHeartClick = () => {
    this.setState((oldState) => {
      return {
        isActive: !oldState.isActive,
      }
    })
  }

  render() {
    return (
      <div className="hearts-container">
        <div className="nav-buttons-container">
          <Explore/>
          <div
            className="nav-button"
            onClick={this.handleHeartClick}>
            <div
              style={{ backgroundImage: `url(${sprites})` }}
              className="nav-button-common nav-button-heart">
            </div>
          </div>
          <Profile/>
        </div>
        {this.state.isActive && <Hearts/>}
      </div>
    )
  }
}

export const MobileButtons = () => {
  return (
    <div className="nav-buttons-container">
      <Home/>
      <Search/>
      <Explore/>
      <Heart/>
      <Profile/>
    </div>
  )
}