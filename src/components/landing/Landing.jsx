import React          from 'react'
import InlineCss      from 'react-inline-css'
import Header         from './header/Header'
import HowTo          from './howto/HowTo'
import Team           from './team/Team'
import Stack          from './stack/Stack'
import GettingStarted from './gettingStarted/GettingStarted'
const stylesheet = require('!css!less!./landing.less').toString()

const Landing = React.createClass({
  render () {
    return (
      <InlineCss componentName="Landing" stylesheet={stylesheet}>
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <HowTo />
          <GettingStarted />
          <Team />
          <Stack />
        </div>
      </InlineCss>
    )
  }
})

export default Landing

