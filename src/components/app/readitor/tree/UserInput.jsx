import React     from 'react'
import InlineCss from 'react-inline-css'

const stylesheet = require('!css!less!./fileTree.less').toString()

class UserInput extends React.Component {
  constructor(props){
    super(props)
    this.inputChange  = this.inputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  inputChange (e){
    this.setState({ userInput: e.target.value })
  }

  handleSubmit (e){
    e.preventDefault()
    let userInput = this.state.userInput
    this.props.editFn(userInput)
    this.props.hideEdit()
  }

  render(){
    return (
      <InlineCss componentName="FileTree" stylesheet={stylesheet}>
        <div className="box">
          <div style={{margin:'0 0 5px 0'}}>Create / Rename</div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.inputChange}
              placeholder="File or directory name&hellip;"
              type="text"
            />
            <div className="btn-container">
              <input
                className="submit-image"
                type="image"
                src="images/checkmark-lb.png"
              />
              <img onClick={this.props.hideEdit} src="images/delete.png" />
            </div>
          </form>
        </div>
      </InlineCss>
    )
  }
}

export default UserInput

