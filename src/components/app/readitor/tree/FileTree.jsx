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

    //adds firebase listeners to initialize items on state and watch for new ones
    this.readProjectDirectory = function(refBase, folderRef, folderPath1, folderPath2){
      let newRef = new Firebase(`${refBase}/${folderRef}`)
      newRef.on('child_added', (item)=> {
        if(this.state.projectDirectory[item.key()] || typeof item.val() !== 'object'){
          return
        }
        let newPath1 = {}
        let newPath2 = {}
        let itemVal = item.val()
        itemVal.key = item.key()
        let toChange = Object.assign({}, this.state.projectDirectory)
        if(folderPath1 === undefined){
          toChange[itemVal.key] = itemVal
          newPath1 = itemVal.key
        } else if(folderPath1 && folderPath2 === undefined){
          toChange[folderPath1][itemVal.key] = itemVal
          newPath1 = folderPath1
          newPath2 = itemVal.key
        } else if(folderPath2){
          toChange[folderPath1][folderPath2][itemVal.key] = itemVal
        }
        this.setState({projectDirectory: toChange})
        if(itemVal.folderName){this.readProjectDirectory(newRef, itemVal.key, newPath1)}
        if(itemVal.folderName && folderPath1 && folderPath2 === undefined){this.readProjectDirectory(newRef, itemVal.key, newPath1, newPath2)}
      })
    }

    //adds firebase listeners to watch for item removal and remove from state
    this.removeProjectItem = function(refBase, folderRef, folderPath1, folderPath2){
      let newRef = new Firebase(`${refBase}/${folderRef}`)
      newRef.on('child_removed', (item)=> {
        let itemVal = item.val()
        itemVal.key = item.key()
        let newPath1 = {}
        let newPath2 = {}
        let toChange = Object.assign({}, this.state.projectDirectory)
        if(folderPath1 === undefined){
          delete toChange[itemVal.key]
          newPath1 = itemVal.key
        } else if(folderPath1 && folderPath2 === undefined){
          delete toChange[folderPath1][itemVal.key]
          newPath1 = folderPath1
          newPath2 = itemVal.key
        } else if(folder2){
          delete toChange[folderPath1][folderPath2][itemVal.key]
        }
        this.setState({projectDirectory: toChange})
        if(itemVal.folderName){this.removeProjectItem(newRef, itemVal.key, newPath1)}
        if(itemVal.folderName && folderPath1 && folderPath2 === undefined){this.removeProjectItem(newRef, itemVal.key, newPath1, newPath2)}
      })
    }

    //child_changed looks at all child descendants without diving into nested nodes
    this.updateProjectItem = function(refBase, folderRef){
      let newRef = new Firebase(`${refBase}/${folderRef}`)
      newRef.on('child_changed', (item)=> {
        let itemVal = item.val()
        itemVal.key = item.key()
        let toChange = Object.assign({}, this.state.projectDirectory)
        toChange[itemVal.key] = itemVal
        this.setState({projectDirectory: toChange})
      })
    }

    this.firebaseRef   = new Firebase('https://pharaohjs.firebaseio.com/session')
    this.refFromRouter = 'projectKey'
    this.projectRef    = new Firebase(`${this.firebaseRef}/${this.refFromRouter}`)
    this.projectRef.once('value', (projectName)=> {
      let projectSession = projectName.val()
      this.setState({projectName: projectSession.projectName})
    })

    this.readProjectDirectory(this.firebaseRef, this.refFromRouter)
    this.removeProjectItem(this.firebaseRef, this.refFromRouter)
    this.updateProjectItem(this.firebaseRef, this.refFromRouter)

    this.handleToggle = this.handleToggle.bind(this)
    this.createFolder = this.createFolder.bind(this)
  }

  createFolder (){
    let ref = new Firebase(`${this.firebaseRef}/${this.refFromRouter}`)
    let newFolderName = 'testFolder'
    let newFolder = ref.push().set({
      folderName: newFolderName
    })
  }

  handleToggle (folderName){
    let oldVal   = this.state.isOpen[folderName]
    let newState = Object.assign({}, this.state.isOpen)
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
              <div className="create-folder" onClick={this.createFolder}>
                <img src="src/shared/images/createfolder.png"
                  style={{width:'20px',position:'relative',top:'5px',padding:'0 5px'
                  }}></img>
                  create new folder
            </div>
              <Folder
                folder={this.state.projectDirectory}
                handleToggle={this.handleToggle}
                isOpen={this.state.isOpen}
                root={true}
                swapDoc={this.props.swapDoc}
                setMode={this.props.setMode}
                firebaseRef={this.firebaseRef}
                firebaseComponentPath={this.refFromRouter}
              />
        </div>
      </InlineCss>
    )
  }
}

export default FileTree
