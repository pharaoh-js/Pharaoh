// displays left-hand filetree, and currently open filename at the top of the filetree
import React from 'react'
import InlineCss from 'react-inline-css'
import Folders from './Folders'
import Files from './Files'

const MirrorWrapper = React.createClass({
  getInitialState: function () {
    return {
      openFiles: false,
    };
  },
  openingFiles: function () {
    this.setState({ openFiles: !this.state.openFiles })
  },
  render () {
    var files = this.state.openFiles ? <Files toggleFiles={this.openingFiles} /> : null
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
                    <Folders files={files} toggleFiles={this.openingFiles} />
                   <Folders files={files} toggleFiles={this.openingFiles} />
                   <Folders toggleFiles={this.openingFiles} />
                   <Folders toggleFiles={this.openingFiles} />
                   <Folders toggleFiles={this.openingFiles} />
                   <Folders toggleFiles={this.openingFiles} />
                   <Folders toggleFiles={this.openingFiles} />
               </div>
             </InlineCss>
    )
  }
})

export default MirrorWrapper
