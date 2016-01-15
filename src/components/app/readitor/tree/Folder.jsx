import React from 'react';
import File from './File.jsx';
import _ from 'lodash';
import InlineCss from 'react-inline-css';

class Folder extends React.Component {
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle (){
    this.props.handleToggle(this.props.folder.folderName)
  };

  render(){
    let that = this;
    var folderContents;
    var folderTitle = this.props.folder.folderName ? (<li className="folder-select"><h4>{this.props.folder.folderName}</h4></li>) : null; //keeps react from rendering an empty item
    var readDirectory = function(folderObj){
      var folders = _.values(folderObj).map((folderItem, index)=> {
        if(folderItem.folderName){
          return (
            <Folder key={index} folder={folderItem} handleToggle={that.props.handleToggle} isOpen={that.props.isOpen} swapDoc={that.props.swapDoc} />
          );
        }
      });
      var files = _.values(folderObj).map((folderItem, index)=> {
        if(folderItem.fileName){
          return (
            <File file={folderItem} key={index} swapDoc={that.props.swapDoc} />
          );
        }
      });
      //Mapped the arrays seperately to sort sibling folders above files in the view, I didn't know a good way to arr.sort(reactElements)
      var nodes = folders.concat(files);
      return nodes;
    };
    if(this.props.root){
      folderContents = readDirectory(this.props.folder);
    }else {
      folderContents = this.props.isOpen[this.props.folder.folderName] ? readDirectory(this.props.folder) : null;
    }
    return (
      <InlineCss stylesheet={`
          & .folder {
            list-style-type: none;
            margin-bottom: 0px;
          }
          & .folder-select:hover {
            background-color: #212223;
            color:#5B97B4;
            cursor: pointer;
          }
          & .folder-select:active {
          background-color: #212223;
          color:#5B97B4;
          cursor: pointer;
          // border: 2px solid white;
          }
          & .custom-list {
            padding-left: 10px;
            margin: 0px;
          }
       `}>
        <div className="folder" onClick={this.handleToggle}>{folderTitle}</div>
        <ul className="custom-list">
          {folderContents}
        </ul>
      </InlineCss>
    );
  }
}

export default Folder;
