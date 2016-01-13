import React from 'react'
import InlineCss from 'react-inline-css'

const StatusBar = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
            & .footer-bar {
                border-bottom-right-radius: 3px;
                border-bottom-left-radius: 3px;
                line-height:30px;
                color:white;
                text-align:center;
                position: absolute;
                width:100%;
                height:3%;
                bottom:0;
                right:0;
                background-color:#0F6FC8;
                z-index:999;
            }
            & .footer-bar span {
              float:right;
              margin: 0 10px;
              line-height:20px;
            }
               `}>
                <div className="footer-bar">
                    <span>Ln 99, Col 55 JavaScript</span>
                </div>
       </InlineCss>
    )
  }
})

export default StatusBar

