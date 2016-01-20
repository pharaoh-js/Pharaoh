import React, { PropTypes } from 'react'
import Mirror               from './mirror/Mirror'
import Settings             from './settings/Settings'


const Wrapper = React.createClass({
  render () {
    let mirror =   <Mirror pad={this.props.pad} config={this.props.config}/>;
    let settings = this.props.isSetting ? <Settings themes={this.props.themes} hideSettings={this.props.hideSettings} updateSettings={this.props.updateSettings}/> : null
    return (
      <div onClick={this.props.hideSettings}
        className="wrapper"
        style={{height: '100%', position: 'relative',left:'19%', width:'81%'}}>
        {mirror}
        {settings}
      </div>
    )
  }
})

export default Wrapper

