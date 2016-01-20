import React     from 'react';
import InlineCss from 'react-inline-css';
const stylesheet = require('!css!less!./fileTree.less').toString()

class File extends React.Component {
  constructor(props){
    super(props)
    this.sendLink = this.sendLink.bind(this)
  }
  sendLink (){
    this.props.swapDoc(this.props.file)
    this.props.setMode(this.props.file.fileName)
    // this.setState({activeFile: this.props.file.fileName});
  }
  // <div onClick={this.props.swapDoc.bind(null, this.props.file.link)} className="file">
  render(){
    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div onClick={this.sendLink} className="file">
          <li className="file-length">
            <small>
              <img src="src/shared/images/file.png" style={{width:'20px',position:'relative',top:'3px'}}></img>
              {this.props.file.fileName}
            </small>
          </li>
       </div>
      </InlineCss>
    )
  }
}

export default File

