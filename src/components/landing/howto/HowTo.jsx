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
            We're a group of students at <a href="http://devmounta.in">DevMountain</a>, building just about the neatest instructor tool you've ever seen. Imagine a lecture with no JSBin or JSFiddle, with no opening the Developer Tools in your browser just to show something in the console, with no rushed projects thrown together and then sent out on Slack. Imagine a read-only app that would allow students to see your code in realtime, as you make changes, and see everything you `import` or `require`, and check out the files you're pulling from.
              </p><p>Well, that's what we imagined, because right now there's a ton of tooling around Javascript development, but not nearly enough tools for teaching it. We're starting with a React-based student app and a package for one of the most popular editors on the market. We hope to build this into something pretty awesome, because no one should have to use JSBin, Github, and Slack, just to get through one lecture.
          </p>
          <big>Usage:</big>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, mi in malesuada molestie, lorem turpis aliquam augue, eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis pretium quis sit amet erat.
              </p><p>
            Sed ullamcorper magna tellus, ut aliquet orci molestie vel. Quisque tempor tellus purus, ut eleifend eros porta sed. Vestibulum imperdiet suscipit placerat. Cras quis elit at lectus pulvinar rutrum. Donec facilisis ultricies quam et auctor. Praesent a tempor ligula, ac feugiat dolor
          </p>
          </div>
      </InlineCss>
    )
  }
})

export default HowTo

