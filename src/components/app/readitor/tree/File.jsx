import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./fileTree.less').toString()

class File extends React.Component {
  constructor(props){
    super(props)
    this.sendLink = this.sendLink.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
  }

  deleteItem (){
    this.props.deleteItem(this.props.firebaseRef, this.props.firebaseComponentPath)
  }

  updateItem (){
    this.props.updateItem(this.props.firebaseRef, this.props.firebaseComponentPath)
  }

  sendLink (){
    this.props.swapDoc(this.props.firebaseComponentPath, this.props.file.fileName)
    this.props.setMode(this.props.file.fileName)
  }

  render(){
    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div className="file">
          <li className="file-length">
            <small>
              <img src="src/shared/images/file.png" style={{width:'20px', position:'relative', top:'3px'}}></img>
              <span onClick={this.sendLink}>{this.props.file.fileName}</span>
              <img src="src/shared/images/delete.png" className={this.props.role === 'w' ? 'icons teacher' :'icons'} onClick={this.deleteItem}></img>
              <img src="src/shared/images/edit-file.png" className={this.props.role === 'w' ? 'icons teacher' :'icons'}></img>
            </small>
          </li>
        </div>
      </InlineCss>
    )
  }
}

export default File
