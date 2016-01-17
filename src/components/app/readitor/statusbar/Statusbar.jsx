import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./statusbar.less').toString()

const StatusBar = React.createClass({
  render() {
    return (
      <InlineCss componentName="StatusBar" stylesheet={stylesheet}>
        <div className="footer-bar">
          <span>Ln 99, Col 55 JavaScript</span>
        </div>
      </InlineCss>
    )
  }
})

export default StatusBar

