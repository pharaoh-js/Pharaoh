import React, { PropTypes } from 'react'
import Readitor             from './readitor/Readitor'
import Menu                 from './menu/Menu'

const App = React.createClass({
  render () {
    return (
        <div>
          <Menu />
          <Readitor />
        </div>
    )
  }
})

export default App

