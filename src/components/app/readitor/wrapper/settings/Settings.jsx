import React     from 'react'
import InlineCss from 'react-inline-css'
import Options   from './options/Options'
const stylesheet = require('!css!less!./settings.less').toString()

const Settings = React.createClass({
  render() {
    return (

      <InlineCss componentName="Settings" stylesheet={stylesheet}>
        <div className="settings">
          <Options updateSettings={this.props.updateSettings}/>
        </div>
      </InlineCss>
    )
  }
})

export default Settings
