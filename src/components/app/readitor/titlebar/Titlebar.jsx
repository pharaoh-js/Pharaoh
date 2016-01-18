import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./titlebar.less').toString()

const TitleBar = React.createClass({
  render() {
    let icon = this.props.isSetting
      ? 'src/shared/images/close_icon.png'
      : 'src/shared/images/settings-icon.png'
    let handleClick = this.props.isSetting ? this.props.hideSettings : this.props.showSettings;
    return (
      <InlineCss componentName="TitleBar" stylesheet={stylesheet}>
        <div className="header-bar">
          <button onClick={this.props.swap.bind(null, 'one')}>one</button>
          <button onClick={this.props.swap.bind(null, 'two')}>two</button>
          <button onClick={this.props.swap.bind(null, 'three')}>three</button>
          <span>&nbsp;&nbsp;
            {this.props.pad}</span>
          <div onClick={handleClick} className="setting-icon">
            <img src={icon} style={{
              width: '22px'
            }}></img>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default TitleBar
