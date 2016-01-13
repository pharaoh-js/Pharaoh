import React from 'react'
import InlineCss from 'react-inline-css'
import {ReactRouter, Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
            & .header {
              border-bottom: 1px solid black;
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
            <h2>Pharaoh JS</h2>
          </div>
          <span>Enter your URL here: <input type="text"></input></span>
          <Link to={'/app'}>GO</Link>
          <div className="howto">
            HOW-TO

          </div>
          <div className="team">
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
