import React, { PropTypes } from 'react'
import Mirror               from './mirror/Mirror'
import Settings             from './settings/Settings'


const Wrapper = React.createClass({
  render () {
    const mirror =   <Mirror pad={this.props.pad} />;
    const settings = <Settings />;
    const content = this.props.isSetting ? settings: mirror
    return (
      <div>
        {content}
      </div>
    )
  }
})

export default Wrapper

