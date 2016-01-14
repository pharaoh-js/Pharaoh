import React from 'react'
import InlineCss from 'react-inline-css'
import {ReactRouter, Link } from 'react-router'
import HowTo from './content/HowTo'
import Team from './content/Team'

const Landing = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
            & .header {
              border-bottom: 1px solid black;
              padding:12px 0;
              background-color:#152329;
              color: #0FB427;
            }
            & .header big {
              font-size:34px;
              padding:0 10px;
            }
            & .header span {
              font-size:14px;
              margin-right:20px;
            }
            & .header span input {
              border-radius:3px;
              width:200px;
            }
            & .header-right {
              margin:40px 10px;
              float:right;
            }
            & .link {
              color: #0FB427;
              background-color:whitesmoke;
              padding:5px;
              border-radius:3px;
            }
               `}>
        <div className="container">
          <div className="header">
            <big>Pharaoh JS</big>
            <img src="src/shared/images/pharaoh.png" style={{width:'50px'}}></img>
            <div className="header-right">
                <span>Enter your URL here: <input type="text"></input>
              </span>
              <Link className="link" to={'/app'}>GO</Link>
            </div>
        </div>
          <HowTo />
          <Team />
        </div>
      </InlineCss>
    )
  }
})

export default Landing
