import React from 'react'
import InlineCss from 'react-inline-css'

const Header = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
        & .header {
          text-align:center;
          border-bottom:1px solid black;
          padding:4px;
          background-color:white;
        }
        & .header div {
          width:100px;
        }
               `}>
                  <div className="header">
                    <div>Settings
                      <img src="src/shared/images/settings-icon.png"
                         style={{
                      width:'22px',
                      marginLeft:'3px',
                      float:'right'
                    }}></img>
                    </div>
                  </div>
       </InlineCss>
    )
  }
})

export default Header
