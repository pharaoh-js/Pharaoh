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
    this.deleteItem   = this.deleteItem.bind(this)
  }

  deleteItem (){
    this.props.deleteItem(this.props.firebaseRef, this.props.firebaseComponentPath)
  }

  createFile (){
    this.props.createFile(this.props.firebaseRef, this.props.firebaseComponentPath)
  }

  handleToggle (){
    this.props.handleToggle(this.props.folder.key)
    console.log(this.props.firebaseComponentPath)
  }

  render(){
    let that = this
    var folderContents
    var folderTitle = this.props.folder.folderName ? (
      <div className="folder-select">
        <img
          src="src/shared/images/folder2x.png"
          style={{width:'16px', position:'relative', top:'3px', paddingRight:'3px'}}>
        </img>
        {this.props.folder.folderName}
      </div>) : null //keeps react from rendering an empty item

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
                deleteItem={that.props.deleteItem}
                firebaseRef={that.props.firebaseRef}
                firebaseComponentPath={`${that.props.firebaseComponentPath}/${folderItem.key}`}
                setMode={that.props.setMode}
              />
            )
          }
        })

      var files = _.values(folderObj).map((folderItem, index)=> {
        if(folderItem.fileName){
          return (
            <File
              file={folderItem}
              key={index}
              swapDoc={that.props.swapDoc}
              deleteItem={that.props.deleteItem}
              firebaseRef={that.props.firebaseRef}
              firebaseComponentPath={`${that.props.firebaseComponentPath}/${folderItem.key}`}
              setMode={that.props.setMode}
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
        <div className="folder" onClick={this.handleToggle}>{folderTitle}</div>
        <button onClick={this.createFile}>mkFile</button>
        <ul className="custom-list">
          {folderContents}
        </ul>
      </InlineCss>
    )
  }
}

export default Folder
