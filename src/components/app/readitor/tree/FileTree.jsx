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

    this.labelChildren = function(refBase, folderRef, folderPath1, folderPath2){
      let newRef = new Firebase(`${refBase}/${folderRef}`);
      newRef.on('child_added', (item)=> {
        if(this.state.projectDirectory[item.key()] || typeof item.val() !== 'object'){
          return;
        }
        let newPath1 = {};
        let newPath2 = {};
        let itemVal = item.val();
        itemVal.key = item.key();
        let toChange = Object.assign({}, this.state.projectDirectory);
        // debugger;
        if(folderPath1 === undefined){
          toChange[itemVal.key] = itemVal;
          newPath1 = itemVal.key;
        }else if(folderPath1 && folderPath2 === undefined){
          toChange[folderPath1][itemVal.key] = itemVal;
          newPath1 = folderPath1
          newPath2 = itemVal.key;
        }else if(folderPath2){
          toChange[folderPath1][folderPath2][itemVal.key] = itemVal;
        }
        this.setState({projectDirectory: toChange});
        if(itemVal.folderName){this.labelChildren(newRef, itemVal.key, newPath1)}
        if(itemVal.folderName && folderPath1 && folderPath2 === undefined){this.labelChildren(newRef, itemVal.key, newPath1, newPath2)}
      });
    }

    this.firebaseRef = new Firebase('https://pharaohjs.firebaseio.com/session');

    //get projectName needs to improve
    this.refFromRouter = 'projectKey'
    this.projectRef = new Firebase(`${this.firebaseRef}/${this.refFromRouter}`);
    this.projectRef.once('value', (projectName)=> {
      let projectSession = projectName.val();
      this.setState({projectName: projectSession.projectName});
      this.labelChildren(this.firebaseRef, this.refFromRouter);
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
          <Folder
            folder={this.state.projectDirectory}
            handleToggle={this.handleToggle}
            isOpen={this.state.isOpen}
            root={true}
            swapDoc={this.props.swapDoc}
            firebasePath={this.refFromRouter}/>
        </div>
      </InlineCss>
    )
  }
}

export default FileTree;
