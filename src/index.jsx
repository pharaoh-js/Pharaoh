import React from 'react'
import ReactDOM from 'react-dom'
import { ReactRouter, Router, Route } from 'react-router'
import App from './components/app/App'
import Landing from './components/landing/Landing'
require('./shared/styles.less')

// ReactDOM.render(<App />, document.getElementById('root'));
import createHistory from 'history/lib/createHashHistory';
var history = createHistory({
  queryKey: false
});
ReactDOM.render(
    (
    <Router history={history}>
    <Route path="/app" component={App}/>
    <Route path="/" component={Landing}/>
  </Router>
), document.getElementById('root'));
