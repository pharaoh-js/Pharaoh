import React from 'react'
import InlineCss from 'react-inline-css'
import Header from './header/Header'
import Options from './options/Options'

const Settings = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
          & .settings {
            position: absolute;
            bottom:0;
            right:0;
            min-height: 350px;
            height:95%;
            width:86.75%;
            background-color:rgb(225, 225, 225);
          }
               `}>
              <div className="settings">
                <Header />
                  <Options />
              </div>
       </InlineCss>
    )
  }
})

export default Settings
