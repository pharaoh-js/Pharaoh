import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./card.less').toString()

const Josh = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div>
          <img src="https://www.junkfreejune.org.nz/themes/base/production/images/default-profile.png" className="card-pic"/>
        </div>
        <big>Joshua Leduc</big>
        <p>
          I am young Full Stack dev excited about learning more. MEAN stack, React, and CSS.
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

