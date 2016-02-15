import React                from 'react'
import InlineCss            from "react-inline-css"
import {ReactRouter, Link}  from 'react-router'
const stylesheet = require('!css!less!./header.less').toString()

const Header = React.createClass({
  getInitialState () {
    return {project: ''}
  },
  handleProjectEntry (e) {
    this.setState({project: e.target.value})
  },
  render() {
    return (
      <InlineCss componentName="Header" stylesheet={stylesheet}>
        <big>Pharaoh</big>
        <img src="images/pharaoh.png" style={{
          width: '50px',
          position: 'relative',
          top: '6px'
        }}></img>
        <div className="header-right">
          <span>Enter session code:
            <input
              type="text"
              value={this.state.project}
              onChange={this.handleProjectEntry}
            ></input>
          </span>
          <Link className="link" to={'/app/r/'+this.state.project}>Go!</Link>
        </div>
      </InlineCss>
    )
  }
})

export default Header

