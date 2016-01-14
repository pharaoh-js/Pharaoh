import React from 'react'
import InlineCss from 'react-inline-css'

const Options = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
                & .container {
                  border-bottom: 1px solid black;
                  // height:282.5px;
                  height: 400px;
                  width:80%;
                  float:left;
                  text-align: center;
                }
                & .themes {
                  text-align: center;
                  float:left;
                  border-right: 1px solid black;
                  height: 100%;
                  width:33%;
                }
                & .themes div {
                  padding:5px;
                }
                & .themes h3 {
                  border-bottom:1px solid black;
                  width:80%;
                  margin-left:10%;
                }
               `}>
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
