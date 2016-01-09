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
        <h3>This is the viewer component and it is awesome</h3>
        <Mirror pad={this.state.pad} />
      </div>
    )
  }
})

export default Viewer
