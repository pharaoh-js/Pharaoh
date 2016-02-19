import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./card.less').toString()

const Tanner = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div>
          <img src="https://avatars2.githubusercontent.com/u/12839274" className="card-pic"/>
        </div>
        <big>J. Tanner Porter</big>
        <p>
          Athelte, Full Stack dev, excited about development. MEAN stack, React, and CSS/LESS.
        </p>
         <li>
          <a className="links" href="http://jtannerporter.azurewebsites.net/">WWW</a>
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
