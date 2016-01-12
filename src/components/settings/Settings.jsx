import React, { PropTypes } from 'react'
import Viewer from './Viewer'
import Menu from './../common/header/Menu'

const Settings = React.createClass({
  render () {
    return (
        <div>
          <Menu />
          <Viewer />
        </div>
    )
  }
})

export default Settings
