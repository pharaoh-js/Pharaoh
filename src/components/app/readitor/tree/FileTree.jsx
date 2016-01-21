import React     from 'react'
import Folder    from './Folder.jsx'
import Firebase  from 'firebase'
import UserInput from './UserInput'
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

    this.readProjectDirectory = function(refBase, folderRef){
      let newRef = new Firebase(`${refBase}/${folderRef}`)
      newRef.on('child_added', (item)=> {
        if(this.state.projectDirectory[item.key()] || typeof item.val() !== 'object'){
          return
        }
        let itemVal = item.val()
        let toChange = Object.assign({}, this.state.projectDirectory)
        toChange[itemVal.key] = itemVal
        this.setState({projectDirectory: toChange})
      })
    }

    this.removeProjectItem = function(refBase, folderRef){
      let newRef = new Firebase(`${refBase}/${folderRef}`)
      newRef.on('child_removed', (item)=> {
        let itemVal = item.val()
        let toChange = Object.assign({}, this.state.projectDirectory)
        delete toChange[itemVal.key]
        this.setState({projectDirectory: toChange})
      })
    }

    this.updateProjectItem = function(refBase, folderRef){
      let newRef = new Firebase(`${refBase}/${folderRef}`)
      newRef.on('child_changed', (item)=> {
        let itemVal = item.val()
        let toChange = Object.assign({}, this.state.projectDirectory)
        toChange[itemVal.key] = itemVal
        this.setState({projectDirectory: toChange})
      })
    }

    this.firebaseRef = new Firebase('https://pharaohjs.firebaseio.com/session');
    this.refFromRouter = this.props.projectKey || 'projectKey';

    this.handleToggle = this.handleToggle.bind(this);
    this.createFolder = this.createFolder.bind(this);
  }
  componentDidMount (){
    this.projectRef = new Firebase(`${this.firebaseRef}/${this.refFromRouter}`);
    this.projectRef.once('value', (project)=> {
      let projectSession = project.val()
      this.setState({projectName: projectSession.projectName})
    })

    this.readProjectDirectory(this.firebaseRef, this.refFromRouter)
    this.removeProjectItem(this.firebaseRef, this.refFromRouter)
    this.updateProjectItem(this.firebaseRef, this.refFromRouter)

    this.handleToggle = this.handleToggle.bind(this)
    this.createFolder = this.createFolder.bind(this)
    this.createFile   = this.createFile.bind(this)
    this.deleteItem   = this.deleteItem.bind(this)
    this.updateItem   = this.updateItem.bind(this)
  }

  createFolder (firebaseRef, componentRef){
    if(this.props.role === 'r'){return}
    this.props.showEdit()
    let ref = new Firebase(`${firebaseRef}/${componentRef}`)
    let parent = ref.key()
    let newFolderName = 'testFolder'
    let newFolder = ref.push()
    let folderKey = newFolder.key()
    newFolder.set({
      folderName: newFolderName,
      key: folderKey
    })
    if(parent !== this.refFromRouter){
      let folderState = Object.assign({}, this.state.isOpen)
      folderState[parent] = true
      this.setState({isOpen: folderState})
    }
  }

  createFile (firebaseRef, componentRef){
    if(this.props.role === 'r'){return}
    this.props.showEdit()
    let ref = new Firebase(`${firebaseRef}/${componentRef}`)
    let parent = ref.key()
    let newFileName = 'testFile.js'
    let newFile = ref.push()
    let fileKey = newFile.key()
    newFile.set({
      fileName: newFileName,
      key: fileKey
    })
    this.props.swapDoc(`${componentRef}/${fileKey}`, newFileName)
    if(parent !== this.refFromRouter){
      let folderState = Object.assign({}, this.state.isOpen)
      folderState[parent] = true
      this.setState({isOpen: folderState})
    }
  }

  deleteItem (firebaseRef, componentRef){
    if(this.props.role === 'r'){return}
    let ref = new Firebase(`${firebaseRef}/${componentRef}`)
    ref.set(null)
  }

  updateItem (firebaseRef, componentRef){
    if(this.props.role === 'r'){return}
    this.props.showEdit()
    let ref = new Firebase(`${firebaseRef}/${componentRef}}`)
    if(ref.folderName){ref.set({folderName: userInput})}
    if(ref.fileName){ref.set({fileName: userInput})}
  }

  handleToggle (key){
    let oldVal   = this.state.isOpen[key]
    let newState = Object.assign({}, this.state.isOpen)
    newState[key] = oldVal ? false : true
    this.setState({
      isOpen: newState
    })
  }

  render(){
      let editBox = this.props.isEditing ? <UserInput
          isEditing={this.props.isEditing}
          showEdit={this.props.showEdit}
          hideEdit={this.props.hideEdit}
        /> : null

    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div className="file-browser">
          <div className="file-header">{this.state.projectName}</div>
          <div className={this.props.role === 'w' ? 'create-folder' :'hide-tree'} onClick={this.createFolder.bind(this, this.firebaseRef, this.refFromRouter)}>
            <img src="src/shared/images/createfolder.png"
              style={{width:'20px', position:'relative', top:'5px', padding:'0 5px'
              }}></img>
              create new folder
          </div>
          <div className={this.props.role === 'w' ? 'create-folder' :'hide-tree'} onClick={this.createFile.bind(this, this.firebaseRef, this.refFromRouter)}>
            <img src="src/shared/images/plus-icon.png"
              style={{width:'20px', position:'relative', top:'5px', padding:'0 5px'
              }}></img>
              create new file
          </div>
          <Folder
            folder={this.state.projectDirectory}
            handleToggle={this.handleToggle}
            isOpen={this.state.isOpen}
            createFile={this.createFile}
            createFolder={this.createFolder}
            deleteItem={this.deleteItem}
            updateItem={this.updateItem}
            root={true}
            swapDoc={this.props.swapDoc}
            setMode={this.props.setMode}
            firebaseRef={this.firebaseRef}
            firebaseComponentPath={this.refFromRouter}
            role={this.props.role}
          />
        {editBox}
        </div>
      </InlineCss>
    )
  }
}

export default FileTree
