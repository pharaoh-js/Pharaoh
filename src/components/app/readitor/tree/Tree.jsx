// displays left-hand filetree, and currently open filename at the top of the filetree
import React     from 'react'
import InlineCss from 'react-inline-css'
import Folders   from './folders/Folders'
import Files     from './files/Files'
const stylesheet = require('!css!less!./tree.less').toString()

const MirrorWrapper = React.createClass({
  render() {
    return (
      <InlineCss componentName="MirrorWrapper" stylesheet={stylesheet}>
        <div className="file-browser">
          <div className="fileHeader">
            <div style={{fontSize: '20px'}}>FILES</div>
          </div>
          <Folders/>
          <Folders/>
          <Files/>
          <Folders/>
          <Files/>
          <Folders/>
          <Files/>
        </div>
      </InlineCss>
    )
  }
})

export default MirrorWrapper

