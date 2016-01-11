import React, { PropTypes } from 'react'
import Mirror from './mirror/Mirror'

const Viewer = React.createClass({
  getInitialState () {
    return {
      pad: '/test3'
    }
  },
  render () {
    return (
      <div>
        <Mirror pad={this.state.pad} />
      </div>
    )
  }
})

export default Viewer
