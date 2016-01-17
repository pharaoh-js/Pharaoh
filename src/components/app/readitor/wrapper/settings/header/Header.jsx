import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./header.less').toString()

const Header = React.createClass({
  render() {
    return (
      <InlineCss componentName="Header" stylesheet={stylesheet}>
        <div className="header">
          <div>Settings
            <img src="src/shared/images/settings-icon.png" style={{
              width: '22px',
              marginLeft: '3px',
              float: 'right'
            }}></img>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Header

