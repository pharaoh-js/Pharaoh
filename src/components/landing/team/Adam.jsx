import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./card.less').toString()

const Adam = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div>
          <img src="https://avatars0.githubusercontent.com/u/1072819?v=3&s=400" className="card-pic"/>
        </div>
        <big>Adam Romines</big>
        <p>
          I am young Full Stack dev excited about learning more. MEAN stack, React, and CSS.
        </p>
         <li>
          <a className="links" href="">WWW</a>
        </li>
    <li>
          <a className="links" href="https://github.com/romines">Github</a>
        </li>
        <li>
          <a className="links" href="https://www.linkedin.com/in/adamromines">LinkedIn</a>
        </li>
         </InlineCss>
    )
  }
})

export default Adam
