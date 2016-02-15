import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./howto.less').toString()

const HowTo = React.createClass({
  render() {
    return (
      <InlineCss componentName="HowTo" stylesheet={stylesheet}>
        <div className="container">
          <div className="header">
            <h2>About Pharaoh</h2>
          </div>
          <br/>
          <big>About:</big>
          <p>
            We're a group of students at <a className="devmtn" href="http://devmounta.in">DevMountain</a>,
            building just about the neatest instructor tool you've ever seen. Imagine a lecture with no JSBin or
            JSFiddle, with no opening the Developer Tools in your browser just to show something in the console,
            with no rushed projects thrown together and then sent out on Slack. Imagine a read-only app that would
            allow students to see your code in realtime, as you make changes, and see everything you `import` or
            `require`, and check out the files you're pulling from.
          </p>
          <p>
            Well, that's what we imagined, because right now there's a ton of tooling around Javascript development,
            but not nearly enough tools for teaching it. We're starting with a React-based student app and a package
            for one of the most popular editors on the market. We hope to build this into something pretty awesome,
            because no one should have to use JSBin, Github, and Slack, just to get through one lecture.
          </p>
          <big>Usage:</big>
          <p>
            For students you will recieve a string of text and to enter the session, enter that test into the
            "Enter session code:" input area, then hit "GO!".
          </p>
          <p>
            For Teachers enter the name of your new session, start, then share your link.
            Or you have to option to download Pharaoh desktop app to be able to store files local on your machine. Enjoy!
          </p>
        </div>
      </InlineCss>
    )
  }
})

export default HowTo
