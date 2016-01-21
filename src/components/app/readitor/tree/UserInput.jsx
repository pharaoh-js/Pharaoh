import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./fileTree.less').toString()

class UserInput extends React.Component {
  render(){
    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div className="box">
          <div style={{margin:'0 0 5px 0'}}>Edit/create area</div>
          <input placeholder="file or folder name..." type="text"></input>
          <div className="btn-container">
            <img onClick={this.props.hideEdit} src="src/shared/images/checkmark-lb.png"></img>
            <img onClick={this.props.hideEdit} src="src/shared/images/delete.png"></img>
          </div>
        </div>
      </InlineCss>
    )
  }
}

export default UserInput
