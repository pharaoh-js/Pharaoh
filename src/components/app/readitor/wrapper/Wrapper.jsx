import React, { PropTypes } from 'react'
import Mirror               from './mirror/Mirror'
import Settings             from './settings/Settings'


const Wrapper = React.createClass({
  render () {
    let mirror =   <Mirror pad={this.props.pad} config={this.props.config}/>;
    let settings = this.props.isSetting ? <Settings updateSettings={this.props.updateSettings}/> : null
    return (
      <div className="wrapper" style={{height: '100%', position: 'relative'}}>
        {mirror}
        {settings}
      </div>
    )
  }
})

export default Wrapper
