import React from 'react'
import InlineCss from "react-inline-css"
import { ReactRouter, Link } from 'react-router'
const stylesheet = require('!css!less!./header.less').toString()

const Header = React.createClass({
  getInitialState() {
    return { project: '' }
  },
  handleProjectEntry(e) {
    this.setState({ project: e.target.value })
  },
  render() {
    return (
      <InlineCss componentName="Header" stylesheet={stylesheet}>
        {/* <big>Pharaoh</big>
        <img src="images/pharaoh.png" style={{
          width: '50px',
          position: 'relative',
          top: '6px'
        }}></img>
        <div className="header-right">
          <span>Join Existing Session:
            <input
              type="text"
              value={this.state.project}
              onChange={this.handleProjectEntry}
            ></input>
          </span>
          <Link className="link" to={'/app/r/'+this.state.project}>Go!</Link>
        </div> */}
        <div className="row justify-content-between align-items-center">
          <div className="col-sm">
            <h2>Pharaoh</h2>
            <img src="images/pharaoh.png" style={{
              width: '50px',
              verticalAlign: 'bottom'
            }}></img>
          </div>
          <div className="col-sm-5 text-right">
            {/*Join Existing Session:
            <input
                type="text"
                value={this.state.project}
                onChange={this.handleProjectEntry}
              ></input> */}
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                  Join Existing Session:
                  </span>
              </div>
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
              <div className="input-group-append">
                <Link className="link" to={'/app/r/' + this.state.project}>
                  <button className="btn btn-outline-secondary" type="button">
                    Go!
                </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </InlineCss >
    )
  }
})

export default Header

