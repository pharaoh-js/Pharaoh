import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./files.less').toString()

const Files = React.createClass({
  render () {
    return (
      <InlineCss componentName="Files" stylesheet={stylesheet}>
        <div>
          <div className="subFile">
            <img src="src/shared/images/file.png" style={{width:'15px',margin:'0 5px 0 0'}}></img>
              subFile.js
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Files

