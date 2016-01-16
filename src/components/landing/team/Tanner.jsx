import React from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./card.less').toString();

const Tanner = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div>
          <img src="src/shared/images/Porter,-Jeremy-01s.jpg" className="card-pic"/>
        </div>
        <big>J. Tanner Porter</big>
        <p>
          I am young Full Stack dev excited about learning more. MEAN stack, React, and CSS.
        </p>
        <li>Github:
          <a className="links" href="https://github.com/Jtporter9">here</a>
        </li>
        <li>Linkedin:
          <a className="links" href="https://www.linkedin.com/in/jtporter9">here</a>
        </li>
        <li>Portfolio Site:
          <a className="links" href="http://j-tannerporter.azurewebsites.net/">here</a>
        </li>
      </InlineCss>
    )
  }
})

export default Tanner
