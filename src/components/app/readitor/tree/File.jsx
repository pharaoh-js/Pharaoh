import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./fileTree.less').toString()

class File extends React.Component {
  constructor(props){
    super(props)
    this.sendLink = this.sendLink.bind(this)
  }
  sendLink (){
    this.props.swapDoc(this.props.firebaseComponentPath, this.props.file.fileName)
    this.props.setMode(this.props.file.fileName)
  }

  render(){
    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div onClick={this.sendLink} className="file">
          <li className="file-length">
            <small>
              <img src="src/shared/images/file.png" style={{width:'20px',position:'relative',top:'3px'}}></img>
              {this.props.file.fileName}
              <img src="src/shared/images/Delete-icon (2).png" style={{width:'15px',position:'relative',top:'4px',float:'right',margin:'0 8px'}}></img>
              <img src="src/shared/images/edit-file.png" style={{width:'15px',position:'relative',top:'4px',float:'right'}}></img>
            </small>
          </li>
       </div>
      </InlineCss>
    )
  }
}

export default File
