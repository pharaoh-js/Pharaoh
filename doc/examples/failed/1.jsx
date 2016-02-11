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
  load(input){
    let ed     = CodeMirror(document.getElementById('pad'), config)
    let reader = new FileReader()
    reader.onload = function(e){
      ed.setValue(e.target.result)
    }
    reader.readAsText(input.files[0])
  },
  save(){
    var textToWrite = document.getElementById('pad').value
      , textBlob = new Blob([textToWrite], {type:'text/plain'})
      , fileName = 'something'
      , downloadLink = document.createElement('a')
    downloadLink.download  = fileName
    downloadLink.innerHTML = 'save'
    if(window.webkitURL != null){
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob)
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob)
      downloadLink.onclick = destroyClickedElement
      downloadlink.style.display = 'none'
      document.body.appendChild(downloadLink)
    }
    downloadLink.click()
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

            <input style={{display: 'none'}} id="load" type="file" />
            <input style={{display: 'none'}} id="save" type="file" />

            <div className="buttons" style={{left: '30%', position: 'absolute'}}>
              <input type="file" onchange="load(this)" />
              <a href="javascript:void(0)" onclick="save()">save</a>
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
