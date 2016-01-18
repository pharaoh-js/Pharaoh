import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./options.less').toString()

const Options = React.createClass({
  render () {
    return (
      <InlineCss componentName="Options" stylesheet={stylesheet}>
         <div>
           <div className="head">Themes</div>
             <div className="option">
               <div onClick={this.props.updateSettings.bind(null, 'theme', 'abcdef')}>
                 - abcdef
               </div>
            </div>
            <div className="option">
              <div onClick={this.props.updateSettings.bind(null, 'theme', 'default')}>
                - default
              </div>
           </div>
         </div>
       </InlineCss>
    )
  }
})

export default Options
