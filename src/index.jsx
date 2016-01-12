import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from 'react-router'
import App from './components/App'
import Settings from './components/settings/Settings'
import { Router, Route, Redirect } from 'react-router';
require('./shared/styles.less')

import createHistory from 'history/lib/createHashHistory';
var history = createHistory({
  queryKey: false
});
ReactDOM.render(
    (
    <Router history={history}>
    <Redirect from="/" to="/home"/>
    <Route path="/home" component={App}/>
    <Route path="/settings" component={Settings}/>
  </Router>
), document.getElementById('root'));
