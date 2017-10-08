import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar, NavbarMobile } from './navbar/navbar'

import routes from './routes'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: false,
      activity: false,
    }
  }

  clickHandler = () => {
    this.setState({ search: false, activity: false })
  }

  showActivity = () => {
    this.setState({ activity: true, search: false })
  }

  showSearch = () => {
    this.setState({ activity: false, search: true })
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar
          search={this.state.search}
          activity={this.state.activity}
          showActivity={this.showActivity}
          showSearch={this.showSearch}/>
        <div
          onClick={this.clickHandler}
          className="main-container">
          <Switch>
            {routes.map(route =>
              <Route exact={route.exact} path={route.path} render={props =>
                <route.component {...props} loadData={route.loadData(props)}/>
              }/>,
            )}
          </Switch>
        </div>
        <NavbarMobile/>
      </div>
    )
  }
}
