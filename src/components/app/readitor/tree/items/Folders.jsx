import React from 'react'
import InlineCss from 'react-inline-css'

const Folders = React.createClass({
  render () {
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
                  <div className="files">
                    <img src="src/shared/images/folder@2x.png" style={{width:'13px',margin:'0 5px 0 0'}}></img>
                    Folder
                  </div>
                </div>
             </InlineCss>
    )
  }
})

export default Folders
