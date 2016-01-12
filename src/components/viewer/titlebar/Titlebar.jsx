import React from 'react'
import InlineCss from 'react-inline-css'
import FontAwesome from 'react-fontawesome'

const MirrorWrapper = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
        & .header-bar {
            border-top-right-radius: 3px;
            border-top-left-radius: 3px;
            line-height:30px;
            color:#0FB427;
            text-align:center;
            position: absolute;
            width:87.9%;
            height:4.8%;
            top:0;
            right:0;
            background-color:#37383A;
            z-index:999;
        }
               `}>
            <div className="header-bar">
                <span>Project.name</span>
                <img src="https://cdn3.iconfinder.com/data/icons/fez/512/FEZ-04-512.png" style={{width:'22px',float:'right',margin:'4px 5px 0 0'}}></img>
            </div>
       </InlineCss>
    )
  }
})

export default MirrorWrapper
