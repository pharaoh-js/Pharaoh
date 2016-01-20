import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./options.less').toString()

const Options = React.createClass({
  render () {
    let themes = this.props.themes.map((theme, i)=> {
      return (
        <div className="option" onClick={this.props.updateSettings.bind(null, 'theme', theme)} key={i}>
          <div>
            - {theme}
          </div>
        </div>
      )
    })
    return (
      <InlineCss componentName="Options" stylesheet={stylesheet}>
        <div>
          <div className="head">Themes</div>
            {themes}
         </div>
       </InlineCss>
    )
  }
})

export default Options

