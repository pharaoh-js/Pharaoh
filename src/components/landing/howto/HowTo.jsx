import React from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./howto.less').toString();

const HowTo = React.createClass({
  render() {
    return (
      <InlineCss componentName="HowTo" stylesheet={stylesheet}>
        <div className="container">
          <div className="header">
            <h2>How to use/About Pharaoh</h2>
          </div>
          <br/>
          <big>About:</big>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, mi in malesuada molestie, lorem turpis aliquam augue, eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis pretium quis sit amet erat. Sed ullamcorper magna tellus, ut aliquet orci molestie vel. Quisque tempor tellus purus, ut eleifend eros porta sed. Vestibulum imperdiet suscipit placerat. Cras quis elit at lectus pulvinar rutrum. Donec facilisis ultricies quam et auctor. Praesent a tempor ligula, ac feugiat dolor
          </p>
          <big>How to use:</big>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin, mi in malesuada molestie, lorem turpis aliquam augue, eget tincidunt arcu tellus in ipsum. Vestibulum eget mi nec nibh convallis pretium quis sit amet erat.
          </p>
          <p>
            Sed ullamcorper magna tellus, ut aliquet orci molestie vel. Quisque tempor tellus purus, ut eleifend eros porta sed. Vestibulum imperdiet suscipit placerat. Cras quis elit at lectus pulvinar rutrum. Donec facilisis ultricies quam et auctor. Praesent a tempor ligula, ac feugiat dolor
          </p>

        </div>
      </InlineCss>
    )
  }
})
export default HowTo
