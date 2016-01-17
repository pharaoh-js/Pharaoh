import React     from 'react'
import InlineCss from "react-inline-css"
import Tanner    from './Tanner'
import Adam      from './Adam'
import Zac       from './Zac'
import Josh      from './Josh'
const stylesheet = require('!css!less!./card.less').toString()

const Team = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div className="container">
          <a className="team-title" href="https://github.com/pharaoh-js">The Pharaoh Team</a>
          <div className="team">
            <div className="card">
              <Adam/>
            </div>
            <div className="card">
              <Tanner/>
            </div>
            <div className="card">
              <Josh/>
            </div>
            <div className="card">
              <Zac/>
            </div>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Team

