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
        & .link{
          color:white;
          margin: 0px 15px;
          font-size:15px;
          }
        & .link:hover{
          color:#0FB427;
          cursor: pointer;
          }
        & .title {
          color:white;
          font-size: 25px;
          position: absolute;
          left: 10px;
          top: 6px;
          text-decoration: none;
        }
        & .title:hover {
          color:#0FB427;
          cursor: pointer;
        }
               `}>
          <div className="header">
            <div>
              <Link className="title" to={"/"}>PHARAOH</Link>
              <small>king of the tutorial tools.</small>
              <div>
                <span className="link">Start a new session</span>
              </div>
            </div>
          </div>
      < /InlineCss>
    )
  }
})
export default Header
