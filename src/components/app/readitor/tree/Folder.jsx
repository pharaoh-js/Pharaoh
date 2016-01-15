import React from 'react';
import File from './File.jsx';
import _ from 'lodash';

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
    var folderTitle = this.props.folder.folderName ? (<li><h4>{this.props.folder.folderName}</h4></li>) : null; //keeps react from rendering an empty item
    var readDirectory = function(folderObj){
      var folders = _.values(folderObj).map((folderItem, index)=> {
        if(folderItem.folderName){
          return (
            <Folder key={index} folder={folderItem} handleToggle={that.props.handleToggle} isOpen={that.props.isOpen} swapDoc={that.props.swapDoc}/>
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
      <div>
        <div onClick={this.handleToggle}>{folderTitle}</div>
        <ul>
          {folderContents}
        </ul>
      </div>
    );
  }
}

export default Folder;
