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
                     <span onclick={this.props.updateSettings.bind(null, 'theme', 'acbdef')}>
                       abcdef
                     </span>
                </div>
                <div className="option">
                    <span>
                      blah:
                      <input type="checkbox"></input>
                    </span>
               </div>
               <div className="option">
                   <span>
                     blah:
                     <input type="checkbox"></input>
                   </span>
              </div>
              <div className="option">
                  <span>
                    blah:
                    <input type="checkbox"></input>
                  </span>
             </div>
             <div className="option">
                 <span>
                   blah:
                   <input type="checkbox"></input>
                 </span>
            </div>
         </div>
       </InlineCss>
    )
  }
})

export default Options
