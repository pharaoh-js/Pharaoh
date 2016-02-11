import React              from 'react'
import InlineCss          from 'react-inline-css'
import { Link, IndexLink} from 'react-router'
const stylesheet = require('!css!less!./header.less').toString()

const Header = React.createClass({
  getInitialState () {
    return {invite:'click'}
  },
  toggleCopying () {
    if (this.state.invite === 'click') {
      this.setState({invite: 'copy'})
    } else {
      this.setState({invite: 'click'})
    }
    let input = this.refs.textInput
    input.focus()
    input.select()
  },
  loadfile(input){
    var reader = new FileReader()
    reader.onload = function(e){
      document.getElementById('pad').value = e.target.result
    }
    reader.readAsText(input.files[0])
  },
  save(){
    var textToWrite  = document.getElementById('pad').value
      , textBlob     = new Blob([textToWrite], {type:'text/plain'})
      , fileName     = 'foo.js'
      , downloadLink = document.createElement('a')
    downloadLink.download      = filename
    downloadLink.innerHTML     = 'save'
    downloadLink.href          = window.URL.createObjectURL(textFileAsBlob)
    downloadLink.onclick       = destroyClickedElement
    downloadLink.style.display = 'none'
    document.body.appendChild(downloadLink)
  },
  render () {
    return (
      <InlineCss componentName="Header" stylesheet={stylesheet}>
        <div className="header">
          <div>
            <Link className="title" to={"/"}>Pharaoh</Link>
            <img src="images/pharaoh.png" style={{
              width: '50px',
              position: 'absolute',
              top: '2px',
              left:'12.5%'
              }}
            />
            <div className="buttons" style={{left:'30%', position:'absolute'}}>
              <input type="file" onchange="loadfile(this)" />
              <a href="#" onclick="save()">save</a>
            </div>
            <div className={this.state.invite}>
              <div className="share" onClick={this.toggleCopying}>
                <span className="text">Invite participants:</span>
                <img src='images/people.png' style={{width: '40px'}}></img>
              </div>
              <input
                ref="textInput"
                className="copyURL"
                type="text"
                readOnly="true"
                value={'http://pharaoh.js.org/' + this.props.projectKey}
              />
            </div>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Header

