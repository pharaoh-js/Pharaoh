import React from 'react';

class File extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div  onClick={this.props.swapDoc.bind(null, this.props.file.link)}>
        <li><h6>{this.props.file.fileName}</h6></li>
      </div>
    )
  }
}

export default File;
