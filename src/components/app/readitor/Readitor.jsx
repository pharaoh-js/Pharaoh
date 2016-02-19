import React     from 'react'
import InlineCss from "react-inline-css"
import Wrapper   from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar  from './titlebar/Titlebar'
import Tree      from './tree/FileTree.jsx'

const stylesheet = require('!css!less!./readitor.less').toString()

const BASEREF = 'https://pharaohjs.firebaseio.com/session/'

const themeNames = [
  'default'
, 'monokai'
, 'mbo'
, 'abcdef'
, 'base16-dark'
, 'base16-light'
, 'tomorrow-night-eighties'
, 'zenburn'
, 'zeemirror'
]

const modeObj = {
  html     : 'htmlmixed'
, htm      : 'htmlmixed'
, xhtml    : 'htmlmixed'
, js       : 'javascript'
, css      : 'css'
, less     : 'css'
, jsx      : 'jsx'
, scss     : 'sass'
, py       : 'python'
, clj      : 'clojure'
, cljs     : 'clojure'
, coffee   : 'coffeescript'
, md       : 'gfm'
, php      : 'php'
, rb       : 'ruby'
, swift    : 'swift'
, lisp     : 'lisp'
, elm      : 'elm'
, go       : 'go'
, hs       : 'haskell'
, jade     : 'jade'
, json     : 'javascript'
, lua      : 'lua'
, pl       : 'perl'
, sass     : 'sass'
, php3     : 'php'
, php4     : 'php'
, php5     : 'php'
, phtml    : 'php'
, rake     : 'ruby'
, zsh      : 'shell'
, ksh      : 'shell'
, phps     : 'php'
, mkd      : 'gfm'
, mkdown   : 'gfm'
, pyw      : 'python'
, markdown : 'gfm'
, bash     : 'shell'
, vue      : 'vue'
, yaml     : 'yaml'
, yml      : 'yaml'
, xml      : 'xml'
, sql      : 'sql'
, sqlite   : 'sql'
, styl     : 'stylus'
, lsp      : 'lisp'
, lisp     : 'lisp'
, cl       : 'lisp'
, el       : 'lisp'
, scm      : 'scheme'
, ss       : 'scheme'
, txt      : null
, log      : null
, text     : null
, def      : null
, list     : null
, conf     : null
, sh       : 'shell'
}

const Viewer = React.createClass({
  swapDoc (path, name) {
    this.setState({
      pad        : path
    , activeFile : name
    , mode       : this.modeFromFilename(name)
    })
  },
  getInitialState () {
    let student = !!(this.props.role === 'r')
    let cmConfig = {
      lineWrapping       : true
    , mode               : 'javascript'
    , theme              : 'abcdef'
    , lineNumbers        : true
    , matchBrackets      : true
    , lineWrapping       : true
    , tabSize            : 2
    , undoDepth          : 1000
    , autofocus          : true
    , cursorScrollMargin : 2
    , readOnly           : student
    , autoCloseBrackets  : true
    , autoCloseTags      : true
    , extraKeys: {
        'Cmd-S'  : function(instance){handleSave()}
      , 'Ctrl-S' : function(instance){handleSave()}
      , 'Cmd-O'  : function(instance){handleOpen()}
      , 'Ctrl-O' : function(instance){handleOpen()}
    // these will need to be hooked up with fire(pad|base) at some point.
    //, 'Cmd-N'  : function(instance){handleNew()}
    //, 'Ctrl-N' : function(instance){handleNew()}
      }
    }
    return {
      pad        : `${this.props.projectKey}/default`
    , isSetting  : false
    , cmConfig   : cmConfig
    , activeFile : ''
    , themes     : themeNames
    , mode       : ''
    , isEditing  : false
    }
  },
  modeFromFilename(fileName) {
    let arr = fileName.split('.')
    let ext = arr[arr.length-1]
    return modeObj[ext]
  },
  setMode(fileName){
    let mode = this.modeFromFilename(fileName)
    this.updateSettings('mode', mode)
  },
  showSettings(){
    this.setState({isSetting: true})
  },
  hideSettings(){
    this.setState({isSetting: false})
  },
  showEdit(editFn){
    this.setState({isEditing: true})
    this.setState({editFn: editFn})
  },
  hideEdit(){
    this.setState({isEditing: false})
  },
  updateSettings(prop, val){
    let config = Object.assign({},this.state.cmConfig)
    config[prop] = val
    this.setState({cmConfig:config})
  },
  render () {
    return (
      <InlineCss componentName="Readitor" stylesheet={stylesheet}>
        <div className="container">
          <TitleBar
            pad={this.state.activeFile}
            showSettings={this.showSettings}
            isSetting ={this.state.isSetting}
          />
          <Tree
            projectKey={this.props.projectKey}
            swapDoc={this.swapDoc}
            pad={this.state.pad}
            setMode={this.setMode}
            isEditing={this.state.isEditing}
            showEdit={this.showEdit}
            hideEdit={this.hideEdit}
            role={this.props.role}
            editFn={this.state.editFn}
          />
          <Wrapper
            themes={this.state.themes}
            hideSettings={this.hideSettings}
            isSetting={this.state.isSetting}
            pad={this.state.pad}
            config={this.state.cmConfig}
            updateSettings={this.updateSettings}
            className="Viewer"
          />
          <StatusBar currentMode={this.state.mode} />
        </div>
      </InlineCss>
    )
  }
})

export default Viewer

