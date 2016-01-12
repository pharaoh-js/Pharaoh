import React from 'react'
import InlineCss from 'react-inline-css'

const Options = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
                & .container {
                  border-right: 1px solid black;
                  border-bottom: 1px solid black;
                  height:282.5px;
                  width:50%;
                  padding:0 0 0 10px;
                  float:left;
                }
                & .option {
                  padding:10px;
                }
               `}>
               <div className="container">
                 <h3>Themes</h3>
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
