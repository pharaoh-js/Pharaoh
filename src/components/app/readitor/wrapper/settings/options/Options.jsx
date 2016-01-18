import React     from 'react'
import InlineCss from 'react-inline-css'
// import Theme     from './Theme'
const stylesheet = require('!css!less!./options.less').toString()

// const themes = this.props.themes;

const Options = React.createClass({
  render () {
    let themes = this.props.themes.map((theme)=> {
      return (
        <div className="option" onClick={this.props.updateSettings.bind(null, 'theme', {theme})}>
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
