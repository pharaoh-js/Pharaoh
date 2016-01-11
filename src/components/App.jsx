import React, { PropTypes } from 'react'
import Viewer from './viewer/MirrorWrapper'
import Header from './common/header/Menu'

const App = React.createClass({
  render () {
    return (
        <div>
          <Header />
          <Viewer />
        </div>
    )
  }
})

export default App
