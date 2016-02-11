import React          from 'react'
import InlineCss      from 'react-inline-css'
import Header         from './header/Header'
import HowTo          from './howto/HowTo'
import Team           from './team/Team'
import Stack          from './stack/Stack'
import GettingStarted from './gettingStarted/GettingStarted'
import Firebase       from 'firebase'

const stylesheet = require('!css!less!./landing.less').toString()
const BASEURL    = 'https://pharaohjs.firebaseio.com/session/'

const Landing = React.createClass({
  initFirebase(projectName = 'Project Name') {
    let ref = new Firebase(BASEURL)
    let projectRef = ref.push({
      projectName : projectName,
      default: {fileName: 'gettingStarted.js', key: 'default'}
    })
    return projectRef.key()
  },
  startSession(projectName) {
    let key = this.initFirebase(projectName)
    this.props.history.pushState(null, '/app/w/' + key)
  },
  render () {
    return (
      <InlineCss componentName="Landing" stylesheet={stylesheet}>
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <HowTo />
          <GettingStarted startSession={this.startSession}/>
          <Team />
          <Stack />
        </div>
      </InlineCss>
    )
  }
})

export default Landing

