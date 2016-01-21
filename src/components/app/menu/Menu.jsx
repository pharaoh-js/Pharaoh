import React              from 'react'
import InlineCss          from "react-inline-css"
import { Link, IndexLink} from 'react-router'
const stylesheet = require('!css!less!./header.less').toString()

const Header = React.createClass({
  getInitialState () {
    return {copying:false}
  }
  render () {
    let invite = this.state.copying ? (<input type="text" value={'http://pharaoh.js.org/' + {this.props.projectKey}></input>) : ()
    return (
      <InlineCss componentName="Header" stylesheet={stylesheet}>
          <div className="header">
            <div>
              <Link className="title" to={"/"}>PHARAOH</Link>
              <div>
                <span className="link">Start a new session</span>
              </div>
            </div>
          </div>
      </InlineCss>
    )
  }
})

export default Header
