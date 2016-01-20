import React, { PropTypes } from 'react'
import Readitor             from './readitor/Readitor'
import Menu                 from './menu/Menu'
import Firebase             from 'firebase'

const BASEREF = 'https://pharaohjs.firebaseio.com/session/'
const App = React.createClass({
  getInitialState () {
    return {project: 'sandbox'}
  },
  componentWillMount() {
    this.role = this.props.params.role
    if (this.role === 'w') {
      let ref = new Firebase(BASEREF);
      let projectRef = ref.push().set({
        projectName : 'Project Name'
      })
      this.projectKey = projectRef.key();
    } else {
      this.projectKey = this.props.params.project;
    }
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
