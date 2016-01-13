import React from 'react'
import ReactDOM from 'react-dom'
// import ReactRouter from 'react-router'
import App from './components/app/App'
// import Settings from './components/settings/Settings'
// import Team from './components/team/Team'
// import Howto from './components/howto/Howto'
// import { Router, Route, Redirect } from 'react-router';
require('./shared/styles.less')

ReactDom.render(<App />, document.getElementById('root'));
// import createHistory from 'history/lib/createHashHistory';
// var history = createHistory({
//   queryKey: false
// });
// ReactDOM.render(
//     (
//     <Router history={history}>
//     <Redirect from="/" to="/home"/>
//     <Route path="/home" component={App}/>
//     <Route path="/settings" component={Settings}/>
//     <Route path="/team" component={Team}/>
//     <Route path="/howto" component={Howto}/>
//   </Router>
// ), document.getElementById('root'));
