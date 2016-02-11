import React     from 'react'
import InlineCss from 'react-inline-css'

const stylesheet = require('!css!less!./gettingStarted.less').toString()

const GettingStarted = React.createClass({
  getInitialState(){return {sessionName: 'New Session'}},
  sessionNameChange(e) {
    this.setState({ sessionName: e.target.value })
  },
  handleSubmit (e) {
    e.preventDefault()
    let sessionName = this.state.sessionName
    this.props.startSession(sessionName);
  },
  render() {
    return (
      <InlineCss componentName="GettingStarted" stylesheet={stylesheet}>
        <div className="container">
          <div className="header">Getting Started</div>
          <div className="option1">
            <big> Start a new session using the browser editor.</big>
            <img src="images/pharaohclient.png"></img>
            <div className="start-session">
              <big>Start new Session</big>
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.sessionNameChange}
                  style={{width:'60%'}}
                  placeholder="optional session name" type="text"
                />
                <input className="btn" type="submit" value="Go!" />
              </form>
              <p>Launch the browser-based Pharaoh editor and send invitations.
                Start a new session above, or join an existing session at the top of the page.
              </p>
            </div>
          </div>
          <div className="option1">
            <big> Or, install the Pharaoh desktop app.</big>
            <img src="images/desktop.png"></img>
            <div className="desktop">
              <span className="npmInstall">npm i -g pharaoh</span>
              <p>Run Pharaoh from the desktop, and get the benefits of saving and opening your local files.
                Just install using NPM and run with the command <code className="command">pharaoh</code>.
              </p>
            </div>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default GettingStarted

