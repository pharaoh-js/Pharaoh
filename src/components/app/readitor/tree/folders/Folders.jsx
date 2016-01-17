import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./folders.less').toString()

const Folders = React.createClass({
  render() {
    return (
      <InlineCss componentName="Folders" stylesheet={stylesheet}>
        <div>
          <div className="files">
            <img src="src/shared/images/folder2x.png" style={{
              width: '13px',
              margin: '0 5px 0 0'
            }}></img>
            Directory
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Folders

