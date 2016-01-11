// displays left-hand filetree, and currently open filename at the top of the filetree
import React from 'react'
import InlineCss from 'react-inline-css'

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
         & .files {
           padding:5px;
           border-bottom: 1px solid white;
         }
          & .files:hover {
           background-color: #212223;
           color:#5B97B4;
           cursor: pointer;
        }
        & .fileHeader {
           border-bottom: 2px solid #0FB427;
           text-align:center;
           padding:4px 0px;
        }
               `}>
               <div className="file-browser">
                 <div className="fileHeader">
                   <div style={{
                     fontSize: '20px'
                   }}>FILES</div>
                 </div>
                 <div className="files">File 1</div>
                 <div className="files">File 2</div>
                 <div className="files">File 3</div>
                 <div className="files">File 4</div>
                 <div className="files">File 5</div>
                 <div className="files">File 6</div>
                 <div className="files">File 7</div>
               </div>
             </InlineCss>
    )
  }
})

export default MirrorWrapper
