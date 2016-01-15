import React from 'react';
import InlineCss from 'react-inline-css';

class File extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <InlineCss stylesheet={`
        & .file {
          list-style-type: none;
        }
        & .file:hover {
          cursor: pointer;
          background-color: #212223;
          color:#5B97B4;
        }
        & .file:active {
          cursor: pointer;
          color: #0FB427;
        }
      `}>
       <div onClick={this.props.swapDoc.bind(null, this.props.file.link)} className="file">
         <li><h5>{this.props.file.fileName}</h5></li>
       </div>
      </InlineCss>
    )
  }
}

export default File;
