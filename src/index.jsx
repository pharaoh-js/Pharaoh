import React                                        from 'react'
import ReactDOM                                     from 'react-dom'
import {browserHistory, ReactRouter, Router, Route} from 'react-router'
import App                                          from './components/app/App'
import Landing                                      from './components/landing/Landing'
import createHistory                                from 'history/lib/createHashHistory'
require('./shared/styles.less')

var history = createHistory({
  queryKey: false
})

ReactDOM.render(
  (
    <Router history={history}>
      <Route path="/app/:role/:project" component={App} />
      <Route path="/" component={Landing} />
    </Router>
  ), document.getElementById('root'))

