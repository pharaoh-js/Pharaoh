import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./card.less').toString()

const Adam = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div>
          <img src="https://avatars0.githubusercontent.com/u/1072819" className="card-pic"/>
        </div>
        <big>Adam Romines</big>
        <p>
          Full Stack dev, living in Jackson, WY. MEAN stack, React, and Javascript.
        </p>
         <li>
          <a className="links" href="http://adamromines.me/cv">WWW</a>
        </li>
        <li>
          <a className="links" href="https://github.com/romines">Github</a>
        </li>
        <li>
          <a className="links" href="https://www.twitter.com/adamromines">@thompenn</a>
        </li>
         </InlineCss>
    )
  }
})

export default Adam

