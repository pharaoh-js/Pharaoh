import React from 'react'
import InlineCss from 'react-inline-css'

const Options = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
                & .container {
                  padding:18px 0;
                }
                & .option {
                  padding:10px;
                }`}>
         <div className="container">
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
