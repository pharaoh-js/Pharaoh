import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./stack.less').toString()

const Stack = React.createClass({
  render() {
    return (
      <InlineCss componentName="Stack" stylesheet={stylesheet}>
        <div className="atom-container">
          <div>Built With</div>
          <img src="src/shared/images/lessicon.jpeg" style={{width:'105px'}}></img>
          <img src="src/shared/images/firebase.png" className="atom-icon"></img>
          <img src="src/shared/images/unnamed.png" style={{
            width: '125px'
          }}></img>
          <img src="src/shared/images/react-opti.png" style={{
            width: '125px'
          }}></img>
          <img src="src/shared/images/atom.png" className="atom-icon"/>
          <img src="src/shared/images/codemirror.png" style={{width:'125px',marginBottom:'13px'}}></img>
        </div>
      </InlineCss>
    )
  }
})

export default Stack

