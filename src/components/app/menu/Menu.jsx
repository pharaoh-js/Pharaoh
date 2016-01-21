import React              from 'react'
import InlineCss          from "react-inline-css"
import { Link, IndexLink} from 'react-router'
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
  },
  render () {
    return (
      <InlineCss componentName="Header" stylesheet={stylesheet}>
          <div className="header">
            <div>
              <Link className="title" to={"/"}>PHARAOH</Link>
              <div className={this.state.invite} onClick={this.toggleCopying}>
                <input type="text" value={'http://pharaoh.js.org/' + this.props.projectKey}></input>
                <img src='src/shared/images/people.png' style={{width: '22px'}}></img>
              </div>
            </div>
          </div>
      </InlineCss>
    )
  }
})

export default Header
