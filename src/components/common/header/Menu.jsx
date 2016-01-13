import React from 'react'
import InlineCss from "react-inline-css"
import { Link, IndexLink} from 'react-router'

const Header = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
        & .header {
          background-color:rgb(71, 71, 71);
          border-bottom:1px solid white;
          color:@mainTextColor;
          text-align: center;
          padding:10px 0 7px 0;
          height: 20px;
          }
          & .header big {
          color:white;
          font-size: 25px;
          position: absolute;
          left: 10px;
          top: 6px;
          }
        & .header small {
            position: absolute;
            left: 190px;
            top: 16px;
            color:#0FB427;
          }
          & .header div {
          float: right;
          margin-right: 10px;
          }
        & .Link{
          color:white;
          margin: 0px 15px;
          font-size:15px;
          }
        & .Link:hover{
          color:#0FB427;
          cursor: pointer;
          }
        & .setting-icon {
            position:fixed;
            right: 15px;
            top: 52px;
            z-index:9999;
          }
          & .setting-icon:hover {
            cursor: pointer;
          }
               `}>
                <div className="header">
                   <div>
                     <big>PHARAOH JS</big>
                     <small>king of the tutorial tools.</small>
                       <div>
                         <Link className="Link" to="/home">Join a session</Link>
                         <Link className="Link" to="/team">Team</Link>
                         <Link className="Link" to="/howto">How it works</Link>
                       </div>
                   </div>
                     <div className="setting-icon">
                       <Link to="/settings">
                         <img src="https://cdn3.iconfinder.com/data/icons/fez/512/FEZ-04-512.png" style={{width:'22px'}}></img>
                       </Link>
                     </div>
               </div>
       </InlineCss>
    )
  }
})

export default Header
