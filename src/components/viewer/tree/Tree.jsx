// displays left-hand filetree, and currently open filename at the top of the filetree
import React from 'react'
import InlineCss from 'react-inline-css'
import Folders from './items/Folders'
import Files from './items/Files'

const MirrorWrapper = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
            & .file-browser {
            position: absolute;
            bottom:0;
            left:0;
            width:13%;
            border-right: 2px solid #0FB427;
            height:100%;
            background-color:#37383A;
            color: white;
            border-bottom-left-radius: 3px;
            border-top-left-radius: 3px;
        }
        & .fileHeader {
           border-bottom: 2px solid #0FB427;
           text-align:center;
           padding:4px 0px;
        }
               `}>
               <div className="file-browser">
                 <div className="fileHeader">
                   <div style={{fontSize: '20px'}}>FILES</div>
                 </div>
                   <Folders />
                   <Folders />
                   <Files />
                   <Folders />
                   <Files />
                   <Folders />
                   <Files />
               </div>
             </InlineCss>
    )
  }
})

export default MirrorWrapper

