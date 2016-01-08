import React, { PropTypes } from 'react'
import Viewer from './viewer/Viewer'

const App = React.createClass({
  render () {
    return (
        <div>
          <h2>Pharaoh, king of the tutorial tools</h2>
          <Viewer />
        </div>
    )
  }
})

export default App
