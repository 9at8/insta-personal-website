import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactGA from 'react-ga'

import App from './app';

import './index.css';

ReactGA.initialize('UA-92216360-2')

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render((
    <Router onUpdate={logPageView}>
      <App/>
    </Router>
  ), document.getElementById('app')
);