import React     from 'react'
import Folder    from './Folder.jsx'
import Firebase  from 'firebase'
import _         from 'lodash'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./fileTree.less').toString()


class FileTree extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      projectName: '',
      projectDirectory: {},
      isOpen: {}
    }

    this.firebaseRef = new Firebase('https://pharaohjs.firebaseio.com/session')

    //get projectName needs to improve
    this.projectRef = new Firebase(`${this.firebaseRef}/projectKey`)
    this.projectRef.once('value', (projectName)=> {
      let nameVal = projectName.val()
      this.setState({projectName: nameVal.projectName})
    })

    //get directory items needs to improve
    this.projectRef.on('child_added', (item)=> {
      if(this.state.projectDirectory[item.key()]){
        return
      }

      let itemVal = item.val()
      itemVal.key = item.key()
      this.state.projectDirectory[itemVal.key] = itemVal
      this.setState({projectDirectory: this.state.projectDirectory})
    })

    this.handleToggle = this.handleToggle.bind(this)
  }
  //pull firebase info before rendering anything, at least the once value thing

  handleToggle (folderName){
    let oldVal = this.state.isOpen[folderName]
    let newState = this.state.isOpen
    newState[folderName] = oldVal ? false : true
    this.setState({
      isOpen: newState
    })
  }

  render(){
    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div className="file-browser">
          <div className="file-header">From url: {this.props.project}</div>
          <Folder
            folder={this.state.projectDirectory}
            handleToggle={this.handleToggle}
            isOpen={this.state.isOpen} root={true}
            swapDoc={this.props.swapDoc}
            setMode={this.props.setMode}
            />
        </div>
      </InlineCss>
    )
  }
}

export default FileTree

