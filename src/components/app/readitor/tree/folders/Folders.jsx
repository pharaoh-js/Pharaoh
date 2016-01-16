import React from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./folders.less').toString();

const Folders = React.createClass({
  render() {
    return (
      <InlineCss componentName="Folders" stylesheet={stylesheet}>
        <div>
          <div className="files">
            <img src="src/shared/images/folder@2x.png" style={{
              width: '13px',
              margin: '0 5px 0 0'
            }}></img>
            Folder
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Folders
