import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar, NavbarMobile } from './navbar/navbar'

import routes from './routes'

import './public/font-awesome-4.7.0/css/font-awesome.min.css'

const App = (props) => {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className="main-container">
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

export default App
