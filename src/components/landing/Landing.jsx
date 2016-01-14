import React from 'react'
import InlineCss from 'react-inline-css'
import {ReactRouter, Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
            & .header {
              border-bottom: 1px solid black;
              padding:20px 0;
            }
            & .header big {
              font-size:24px;
            }
            & .header span {
              font-size:14px;
              margin-left:250px;
            }
            & .howto {
              border:1px solid black;
              border-radius:3px;
              width:50%;
              height: 300px;
              margin:10px;
            }
            & .team {
              border: 1px solid black;
              border-radius:3px;
              display:flex;
            }
            & .card {
              border: 1px solid black;
              border-radius:3px;
              justify-content:space-between;
            }
               `}>
        <div className="container">
          <div className="header">
            <big>Pharaoh JS</big>
              <img src="src/shared/images/pharaoh.png" style={{
              width:'50px',
              margin:'0 10px',
              position:'absolute',
              right:'0',
              top:'8px'
            }}></img>
            <span>Enter your URL here: <input type="text"></input>
            <Link to={'/app'}>GO</Link>
            </span>
        </div>
          <div className="howto">
            <div style={{borderBottom:'1px solid black', textAlign:'center'}}>
              HOW-TO
            </div>
            blah blah blah
          </div>
          <div className="team">
            <h3>Team Pharaoh JS</h3>
             <div className="card">Adam</div>
            <div className="card">Tanner</div>
            <div className="card">Zac</div>
            <div className="card">Josh</div>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Landing
