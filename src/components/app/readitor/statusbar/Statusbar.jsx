import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./statusbar.less').toString()

const StatusBar = React.createClass({
  render() {
        return (
      <InlineCss componentName="StatusBar" stylesheet={stylesheet}>
        <div className="footer-bar">
          <div style={{position:'absolute',right:'0px'}}>
            {this.props.currentMode}
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default StatusBar

