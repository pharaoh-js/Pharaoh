import React     from 'react'
import InlineCss from 'react-inline-css'
const stylesheet = require('!css!less!./fileTree.less').toString()

class UserInput extends React.Component {
  render(){
    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div className="box">
          <div>Edit/create area</div>
          <input placeholder="file or folder name..." type="text"></input>
          <div className="btn-container"><button>GOOD</button><button>NO GOOD</button></div>
        </div>
      </InlineCss>
    )
  }
}

export default UserInput
