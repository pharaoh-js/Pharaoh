import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./card.less').toString()

const Josh = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div>
          <img src="https://avatars3.githubusercontent.com/u/8573827" className="card-pic"/>
        </div>
        <big>Joshua Leduc</big>
        <p>
          Full Stack dev. Code is life. Tech. MEAN stack, React, Javascript, Firebase.
        </p>
         <li>
          <a className="links" href="">WWW</a>
        </li>
         <li>
          <a className="links" href="https://github.com/joshualeduc">Github</a>
        </li>
        <li>
          <a className="links" href="https://www.linkedin.com/in/joshualeduc">LinkedIn</a>
        </li>
      </InlineCss>
    )
  }
})

export default Josh

