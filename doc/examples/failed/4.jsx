import React              from 'react'
import InlineCss          from 'react-inline-css'
import { Link, IndexLink} from 'react-router'
const stylesheet = require('!css!less!./header.less').toString()

var openButton, saveButton, editor, menu, fileEntry, hasWriteAccess

const Header = React.createClass({
  getInitialState () {
    return {invite:'click'}
  },
setFile(theFileEntry, isWritable){
  fileEntry      = theFileEntry
  hasWriteAccess = isWritable
},
readFileIntoEditor(theFileEntry){
  fs.readFile(theFileEntry, function(err, data){
    if(err){
      console.log('reading error', err)
    }
    editor.setValue(String(data))
  })
},
writeEditorToFile(theFileEntry){
  var str = editor.getValue()
  fs.writeFile(theFileEntry, editor.getValue(), function(err){
    if(err){
      console.log('writing error', err)
      return
    }
    console.log('wrote.')
  })
},
onChosenFileToOpen(theFileEntry){
  setFile(theFileEntry, false)
  readFileIntoEditor(theFileEntry)
},
onChosenFileToSave(theFileEntry){
  setFile(theFileEntry, true)
  writeEditorToFile(theFileEntry)
},
handleOpenButton(){
  $('#openFile').trigger('click')
},
handleSaveButton(){
  if (fileEntry && hasWriteAccess){
    writeEditorToFile(fileEntry)
  } else {
    $('#saveFile').trigger('click')
  }
},
onload(){
  openButton = document.getElementById('open')
  saveButton = document.getElementById('save')
  openButton.addEventListener('click', handleOpenButton)
  saveButton.addEventListener('slick', handleSaveButton)
  $('#saveFile').change(function(evt){
    onChosenFileToSave($(this).val())
  })
  $('#openFile').change(function(evt){
    onChosenFileToOpen($(this).val())
  })
  editor = CodeMirror(document.getElementById('pad'), config)
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
              <button id="open">open</button>
              <button id="save">save</button>
            </div>
            <input style={{display:'none'}} id="openFile" type="file" />
            <input style={{display:'none'}} id="saveFile" type="file" nwsaveas />
            <div className={this.state.invite}>
              <div className="share" onClick={this.toggleCopying}>
                <span className="text">Invite participants:</span>
                <img src='images/people.png' style={{width: '40px'}} />
              </div>
              <input
                ref="textInput"
                className="copyURL"
                type="text"
                readOnly="true"
                value={'http://pharaoh.js.org/app/r/' + this.props.projectKey}
              />
            </div>
          </div>
        </div>
      </InlineCss>
    )
  }
})

export default Header

// <button className="btn" data-clipboard-target={'http://pharaoh.js.org/' + this.props.projectKey}>
//   <i className="fa fa-clipboard"></i>
// </button>

