import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./stack.less').toString()

const Stack = React.createClass({
  render() {
    return (
      <InlineCss componentName="Stack" stylesheet={stylesheet}>
        <div className="atom-container">
          <div>Built With</div>
          <img src="images/lessicon.jpeg" style={{width:'105px'}} />
          <img src="images/firebase.png" className="atom-icon"/>
          <img src="images/unnamed.png" style={{width: '125px'}}/>
          <img src="images/react-opti.png" style={{width: '125px'}}/>
          <img src="images/atom.png" className="atom-icon"/>
          <img src="images/codemirror.png" style={{width:'125px',marginBottom:'13px'}}/>
        </div>
      </InlineCss>
    )
  }
})

export default Stack

