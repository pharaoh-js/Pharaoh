import React              from 'react'
import InlineCss          from 'react-inline-css'
import {Link, IndexLink}  from 'react-router'

const stylesheet = require('!css!less!./header.less').toString()

const Header = React.createClass({
  getInitialState () {
    return {invite:'click'}
  },

  toggleCopying () {
    if (this.state.invite === 'click') {
      this.setState({invite: 'copy'})
    } else {
      this.setState({invite: 'click'})
    }
    let input = this.refs.textInput
    input.focus()
    input.select()
  },

  render () {
    return (
      <InlineCss componentName="Header" stylesheet={stylesheet}>
        <div className="header">
          <div>
            <Link className="title" to={"/"}>Pharaoh</Link>
            <img
              src="images/pharaoh.png"
              style={{
                width    : '50px'
              , position : 'absolute'
              , top      : '  3px'
              , left     : '200px'
              }}
            />
            <div className={this.state.invite}>
              <div className="share" onClick={this.toggleCopying}>
                <span className="text">Invite Participants:</span>
                <img src='images/people.png' style={{width: '40px'}} />
              </div>
              <input
                ref="textInput"
                className="copyURL"
                type="text"
                readOnly="true"
                value={'http://pharaoh.js.org/#/app/r/' + this.props.projectKey}
              />
            </div>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Header

// alternate unicode for clipboard: &#x1f4cb;
// <button className="btn" data-clipboard-target="#copyThis">&#128203;</button>
// (with id="copyThis" on the input)
// basicaly the same thing as the current button:
// <button className="btn" data-clipboard-text={'http://pharaoh.js.org/#/app/r/' + this.props.projectKey}>

