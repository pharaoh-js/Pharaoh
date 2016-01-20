import React, { PropTypes } from 'react'
import Readitor             from './readitor/Readitor'
import Menu                 from './menu/Menu'

const App = React.createClass({
  getInitialState () {
    return {project: 'sandbox'}
  },
  componentDidMount () {
    const project = this.props.params.project
    this.setState({ project: project })
  },
  render () {
    return (
        <div>
          <Menu />
          <Readitor project={this.state.project}/>
        </div>
    )
  }
})

export default App

