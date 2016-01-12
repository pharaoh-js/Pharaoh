import React, { PropTypes } from 'react'
import Mirror from './Mirror'

const MirrorWrapper = React.createClass({
  render () {
    return (
      <div>
        <Mirror pad={this.props.pad} />
      </div>
    )
  }
})

export default MirrorWrapper

