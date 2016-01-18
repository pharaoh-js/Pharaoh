import React     from 'react'
import InlineCss from 'react-inline-css'
import Options   from './options/Options'
const stylesheet = require('!css!less!./settings.less').toString()

const Settings = React.createClass({
  render() {
  let handleClick = this.props.isSetting ? this.props.hideSettings : this.props.showSettings;
    return (
      <InlineCss componentName="Settings" stylesheet={stylesheet}>
        <div className="settings">
          <div className="settings-tab"><span>
            <small onClick={handleClick}>
              <img onClick={this.props.hideSettings} src="http://uxrepo.com/static/icon-sets/google-material/svg/android-close.svg" style={{width:'10px',marginRight:'10px'}}></img>
            </small>
            Settings
          </span></div>
          <Options updateSettings={this.props.updateSettings}/>
        </div>
      </InlineCss>
    )
  }
})

export default Settings
