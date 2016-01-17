import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./options.less').toString()

const Options = React.createClass({
  render () {
    return (
      <InlineCss componentName="Options" stylesheet={stylesheet}>
               <div className="container">
                  <div className="themes">
                    <h3>Theme</h3>
                    <select>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                    </select>
                  </div>
                  <div className="themes">
                    <h3>Mode</h3>
                    <select>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                    </select>
                  </div>
                  <div className="themes">
                    <h3>Add-ons</h3>
                      <div>asdfasdf: <input type="checkbox"></input></div>
                      <div>asdfasdf: <input type="checkbox"></input></div>
                      <div>asdfasdf: <input type="checkbox"></input></div>
                      <div>asdfasdf: <input type="checkbox"></input></div>
                      <div>asdfasdf: <input type="checkbox"></input></div>
                      <div>asdfasdf: <input type="checkbox"></input></div>
                  </div>
               </div>
       </InlineCss>
    )
  }
})

export default Options

