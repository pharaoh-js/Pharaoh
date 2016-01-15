import React, { PropTypes } from 'react'
import Mirror from './mirror/Mirror'
import Settings from './settings/Settings'


const Wrapper = React.createClass({
  render () {
    let mirror =   <Mirror pad={this.props.pad} />;
    let settings = this.props.isSetting ? <Settings /> : null
    return (
      <div>
        {mirror}
        {settings}
      </div>
    )
  }
})

export default Wrapper
