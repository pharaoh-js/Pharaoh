import React     from 'react'
import File      from './File.jsx'
import _         from 'lodash'
import Firebase  from 'firebase'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./fileTree.less').toString()

class Folder extends React.Component {
  constructor(props){
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.createFile   = this.createFile.bind(this)
    this.createFolder = this.createFolder.bind(this)
    this.deleteItem   = this.deleteItem.bind(this)
    this.updateItem   = this.updateItem.bind(this)
    this.showEdit     = this.showEdit.bind(this)
  }

  deleteItem (){
    this.props.deleteItem(this.props.firebaseRef, this.props.firebaseComponentPath)
  }

  createFile (userInput){
    this.props.createFile(this.props.firebaseRef, this.props.firebaseComponentPath, userInput)
  }

  createFolder (userInput){
    this.props.createFolder(this.props.firebaseRef, this.props.firebaseComponentPath, userInput)
  }

  updateItem (userInput){
    this.props.updateItem(this.props.firebaseRef, this.props.firebaseComponentPath, userInput)
  }

  handleToggle (){
    this.props.handleToggle(this.props.folder.key)
  }

  showEdit (editFn){
    this.props.showEdit(editFn)
  }

  render(){
    let that = this
    var folderContents
    var folderTitle = this.props.folder.folderName ? (
      <div className="folder-select">
        <span onClick={this.handleToggle}>
          <img
            src="images/folder2x.png"
            style={{width:'16px', position:'relative', top:'3px', paddingRight:'3px'}}>
          </img>
          {this.props.folder.folderName}
        </span>
        <span>
          <img
            className={this.props.role === 'w' ? 'icons teacher' : 'icons'}
            src="images/delete.png"
            onClick={this.deleteItem}
          />
          <img
            className={this.props.role === 'w' ? 'icons teacher' : 'icons'}
            src="images/edit-file.png"
            onClick={this.showEdit.bind(this, this.updateItem)}
          />
          <img
            className={this.props.role === 'w' ? 'icons teacher' : 'icons'}
            src="images/plus-icon.png"
            onClick={this.showEdit.bind(this, this.createFile)}
          />
          <img
            className={this.props.role === 'w' ? 'icons teacher' : 'icons'}
            src="images/createfolder.png"
            onClick={this.showEdit.bind(this, this.createFolder)}
          />
        </span>
      </div>
    ) : null

      var readDirectory = function(folderObj){
        var folders = _.values(folderObj).map((folderItem, index)=> {
          if(folderItem.folderName){
            return (
              <Folder
                key={index}
                folder={folderItem}
                handleToggle={that.props.handleToggle}
                isOpen={that.props.isOpen}
                swapDoc={that.props.swapDoc}
                createFile={that.props.createFile}
                createFolder={that.props.createFolder}
                deleteItem={that.props.deleteItem}
                updateItem={that.props.updateItem}
                firebaseRef={that.props.firebaseRef}
                firebaseComponentPath={`${that.props.firebaseComponentPath}/${folderItem.key}`}
                role={that.props.role}
                setMode={that.props.setMode}
                showEdit={that.props.showEdit}
              />
            )
          }
        })

      var files = _.values(folderObj).map((folderItem, index) => {
        if(folderItem.fileName){
          return (
            <File
              file={folderItem}
              key={index}
              swapDoc={that.props.swapDoc}
              deleteItem={that.props.deleteItem}
              updateItem={that.props.updateItem}
              firebaseRef={that.props.firebaseRef}
              firebaseComponentPath={`${that.props.firebaseComponentPath}/${folderItem.key}`}
              role={that.props.role}
              setMode={that.props.setMode}
              showEdit={that.props.showEdit}
            />
          )
        }
      })
      var nodes = folders.concat(files)
      return nodes
    }
    if(this.props.root){
      folderContents = readDirectory(this.props.folder)
    } else {
      folderContents = this.props.isOpen[this.props.folder.key] ? readDirectory(this.props.folder) : null
    }
    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div className="folder">
          {folderTitle}
        </div>
          <ul className="custom-list">
            {folderContents}
          </ul>
      </InlineCss>
    )
  }
}

export default Folder

