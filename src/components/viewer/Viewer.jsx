import React, { PropTypes } from 'react'
import Mirror from './mirror/Mirror'

const Viewer = React.createClass({
  swapDoc (pad) {
    console.log('sD: ', pad);
    this.setState({pad:pad})
  },
  getInitialState () {
    return {
      pad: 'test3'
    }
  },
  render () {
    return (
      <div>
        <h3>This is the viewer component and it is awesome</h3>
        <button onClick={this.swapDoc.bind(null, 'one')}>one</button>
        <button onClick={this.swapDoc.bind(null, 'two')}>two</button>
        <button onClick={this.swapDoc.bind(null, 'three')}>three</button>
        <Mirror pad={this.state.pad} />
      </div>
    )
  }
})

export default Viewer
