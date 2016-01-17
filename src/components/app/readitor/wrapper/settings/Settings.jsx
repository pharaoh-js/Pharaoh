import React     from 'react'
import InlineCss from 'react-inline-css'
import Header    from './header/Header'
import Options   from './options/Options'
const stylesheet = require('!css!less!./settings.less').toString()

const Settings = React.createClass({
  render() {
    return (
      <InlineCss componentName="Settings" stylesheet={stylesheet}>
        <div className="settings">
          <Header/>
          <Options/>
        </div>
      </InlineCss>
    )
  }
})

export default Settings

