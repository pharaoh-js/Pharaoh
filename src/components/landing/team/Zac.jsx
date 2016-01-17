import React     from 'react'
import InlineCss from "react-inline-css"
const stylesheet = require('!css!less!./card.less').toString()

const Zac = React.createClass({
  render() {
    return (
      <InlineCss componentName="Card" stylesheet={stylesheet}>
        <div>
          <img src="https://s3-us-west-1.amazonaws.com/devepprofiles%2Fzac%40zacanger.com/11188319_10152898699796446_2884929989969112153_n.jpg" className="card-pic"/>
        </div>
        <big>Zac Anger</big>
        <p>
          Musician, nix hacker, and Javascript developer passionate about OSS & web technologies.
        </p>
         <li>
          <a className="links" href="http://zacanger.com">WWW</a>
        </li>
        <li>
          <a className="links" href="https://github.com/zacanger">Github</a>
        </li>
        <li>
          <a className="links" href="https://twitter.com/@zacanger">@zacanger</a>
        </li>
             </InlineCss>
    )
  }
})

export default Zac

