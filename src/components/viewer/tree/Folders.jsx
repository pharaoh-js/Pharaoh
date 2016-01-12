import React from 'react'
import InlineCss from 'react-inline-css'

const Folders = React.createClass({
  render () {
    var files = this.props.files;
    return (
      <InlineCss stylesheet={`
                  & .files {
                    padding:5px;
                    border-bottom: 1px solid rgb(190, 190, 190);
                  }
                   & .files:hover {
                    background-color: #212223;
                    color:#5B97B4;
                    cursor: pointer;
                   }
                 & .files:active {
                  background-color: #212223;
                  color:#5B97B4;
                  cursor: pointer;
                 //  font-size:17px;
                  border: 2px solid white;
                   }
               `}>
                <div>
                  <div onClick={this.props.toggleFiles} className="files">Folder</div>
                  {files}
                </div>
             </InlineCss>
    )
  }
})

export default Folders
