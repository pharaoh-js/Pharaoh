import React, { PropTypes } from 'react'
import Readitor             from './readitor/Readitor'
import Menu                 from './menu/Menu'

const App = React.createClass({
  getInitialState () {
    return {project: 'sandbox'}
  },
  componentWillMount() {
    this.role = this.props.params.role
    this.projectKey = this.props.params.project;
  },
  render () {
    return (
      <div>
        <Menu />
        <Readitor
          projectKey={this.projectKey}
          role={this.role}
          />
      </div>
    )
  }
})

export default App

