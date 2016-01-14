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
              margin:30px 10px;
              float:right;
            }
            & .link {
              color:black;
              background-color:whitesmoke;
              padding:5px;
              border-radius:3px;
              text-decoration: none;
            }
            & .link:hover {
              color: #0FB427;
              padding:3px;
              border:2px solid #0FB427;
            }
               `}>
        <div className="container">
          <div className="header">
            <big>Pharaoh JS</big>
            <img src="src/shared/images/pharaoh.png" style={{
            width:'50px',
            position:'relative',
            top:'8px'
          }}></img>
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
