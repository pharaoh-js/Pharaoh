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
            <big>Start new session using browser editor.

            </big>
            <img src="src/shared/images/pharaohclient.png" style={{width:'47%',float:'left',margin:'20px 0 0 5px',zIndex:200}}></img>
            <div className="start-session">
              <big>Start new Session</big>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.sessionNameChange} style={{width:'60%'}} placeholder="Optional session name..." type="text"></input>
                <input type="submit" value="Go"></input>
              </form>
              <p>Launch the Pharaoh browser based editor and invite 
              </p>
            </div>
          </div>

        </div>
      </InlineCss>
    )
  }
})

export default GettingStarted
