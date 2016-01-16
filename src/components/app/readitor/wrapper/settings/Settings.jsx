import React from 'react'
import InlineCss from 'react-inline-css'
import Options from './options/Options'

const Settings = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
          & .settings {
            z-index: 5;
            position: absolute;
            top: 0;
            right: 0;
            min-height: 250px;
            height:75%;
            width:22%;
            background-color:rgb(225, 225, 225);
          }

               `}>
              <div className="settings">
                <Options updateSettings={this.props.updateSettings} />
              </div>
       </InlineCss>
    )
  }
})

export default Settings
