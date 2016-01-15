import React from 'react'
import InlineCss from 'react-inline-css'

const Files = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
            & .subFile {
              // padding-left:20px;
              padding:5px 5px 5px 20px;
            }
            & .subFile:hover {
              cursor: pointer;
              background-color: #212223;
              color:#5B97B4;
            }
            & .subFile:active {
              cursor: pointer;
              color: #0FB427;
            }
               `}>
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
