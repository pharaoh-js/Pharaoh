import React from 'react';
import Folder from './Folder.jsx';
import Firebase from 'firebase';
import _ from 'lodash';
import InlineCss from 'react-inline-css';

class FileTree extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projectName: '',
      projectDirectory: {},
      isOpen: {}
    };


    this.firebaseRef = new Firebase('https://pharaohjs.firebaseio.com/session');

    //get projectName needs to improve
    this.projectRef = new Firebase(`${this.firebaseRef}/projectKey`);
    this.projectRef.once('value', (projectName)=> {
      let nameVal = projectName.val();
      this.setState({projectName: nameVal.projectName});
    });

    //get directory items needs to improve
    this.projectRef.on('child_added', (item)=> {
      if(this.state.projectDirectory[item.key()]){
        return;
      }

      let itemVal = item.val();
      itemVal.key = item.key();
      this.state.projectDirectory[itemVal.key] = itemVal;
      this.setState({projectDirectory: this.state.projectDirectory});
    });

    this.handleToggle = this.handleToggle.bind(this);
  }
  //pull firebase info before rendering anything, at least the once value thing

  handleToggle (folderName){
    let oldVal = this.state.isOpen[folderName];
    let newState = this.state.isOpen;
    newState[folderName] = oldVal ? false : true;
    this.setState({
      isOpen: newState
    })
  }


  render(){
    return (
      <InlineCss stylesheet={`
        & .file-browser {
        position: absolute;
        bottom:0;
        left:0;
        width:13%;
        border-right: 2px solid #0FB427;
        height:100%;
        background-color:#37383A;
        color: white;
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
      }
        & .file-header {
        border-bottom: 2px solid #0FB427;
        text-align:center;
        padding:4px 0px;
      }
     `}>
        <div className="file-browser">
          <h2 className="file-header">{this.state.projectName}</h2>
          <Folder folder={this.state.projectDirectory} handleToggle={this.handleToggle} isOpen={this.state.isOpen} root={true} swapDoc={this.props.swapDoc} />
        </div>
      </InlineCss>
    )
  }
}

export default FileTree;
