import React from 'react'
import InlineCss from "react-inline-css"

const Header = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
              .header {
                background-color:rgb(71, 71, 71);
                border-bottom:1px solid white;
                color:@mainTextColor;
                text-align: center;
                padding:10px 0 7px 0;
                height: 20px;
                // box-shadow: 1px 1px 1px 1px gray;
                }
                .header big {
                font-size: 25px;
                position: absolute;
                left: 10px;
                top: 6px;
                }
                .header small {
                  position: absolute;
                  left: 175px;
                  top: 19px;
                  font-family:monospace;
                  color:#0FB427;
                }
                .header div {
                float: right;
                margin-right: 10px;
                }
                .header span{
                color:@mainTextColor;
                margin: 0px 15px;
                font-size:15px;
                font-family:monospace;
                }
                .header span:hover{
                color:rgb(68, 199, 93);
                cursor: pointer;
                }
               `}>
                <div className="header">
                   <div>
                     <big>PHARAOH JS</big>
                     <small>king of the tutorial tools.</small>
                       <div>
                         <span href="#">Join a session</span>
                         <span href="#">About</span>
                         <span href="#">How to</span>
                       </div>
                   </div>
               </div>
       </InlineCss>
    )
  }
})

export default Header

