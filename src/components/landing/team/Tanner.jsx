import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./card.less').toString()

const Tanner = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div>
          <img src="src/shared/images/tanner.jpg" className="card-pic"/>
        </div>
        <big>J. Tanner Porter</big>
        <p>
          I am young Full Stack dev excited about development. MEAN stack, React, and CSS.
        </p>
         <li>
          <a className="links" href="http://j-tannerporter.azurewebsites.net/">WWW</a>
        </li>
        <li>
          <a className="links" href="https://github.com/Jtporter9">Github</a>
        </li>
        <li>
          <a className="links" href="https://www.linkedin.com/in/jtporter9">LinkedIn</a>
        </li>
             </InlineCss>
    )
  }
})

export default Tanner
