import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./options.less').toString()

const Options = React.createClass({
  render () {
    return (
      <InlineCss componentName="Options" stylesheet={stylesheet}>
         <div>
           <h3>Themes</h3>
             <div className="option">
               <span onClick={this.props.updateSettings.bind(null, 'theme', 'abcdef')}>
                 abcdef
               </span>
            </div>
            <div className="option">
              <span onClick={this.props.updateSettings.bind(null, 'theme', 'default')}>
                default
              </span>
           </div>
         </div>
       </InlineCss>
    )
  }
})

export default Options
