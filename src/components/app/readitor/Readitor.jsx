import React     from 'react'
import InlineCss from 'react-inline-css'
import Wrapper   from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar  from './titlebar/Titlebar'
import Tree      from './tree/FileTree.jsx'

const stylesheet = require('!css!less!./readitor.less').toString()

const BASEREF = 'https://pharaohjs.firebaseio.com/session/'

const themeNames = [
  'abcdef'
, 'base16-dark'
, 'base16-light'
, 'default'
, 'mbo'
, 'monokai'
, 'tomorrow-night-eighties'
, 'zenburn'
, 'zeemirror'
]

const modeObj = {
  css      : 'css'
, less     : 'css'
, clj      : 'clojure'
, cljs     : 'clojure'
, coffee   : 'coffeescript'
, elm      : 'elm'
, jade     : 'jade'
, js       : 'javascript'
, json     : 'javascript'
, jsx      : 'jsx'
, md       : 'gfm'
, mkd      : 'gfm'
, markdown : 'gfm'
, mkdown   : 'gfm'
, go       : 'go'
, hs       : 'haskell'
, html     : 'htmlmixed'
, htm      : 'htmlmixed'
, xhtml    : 'htmlmixed'
, lua      : 'lua'
, pl       : 'perl'
, php      : 'php'
, php3     : 'php'
, php4     : 'php'
, php5     : 'php'
, phps     : 'php'
, phtml    : 'php'
, py       : 'python'
, pyw      : 'python'
, rb       : 'ruby'
, rake     : 'ruby'
, sass     : 'sass'
, scss     : 'sass'
, scm      : 'scheme'
, ss       : 'scheme'
, zsh      : 'shell'
, sh       : 'shell'
, bash     : 'shell'
, ksh      : 'shell'
, styl     : 'stylus'
, swift    : 'swift'
, sql      : 'sql'
, sqlite   : 'sql'
, lsp      : 'lisp'
, lisp     : 'lisp'
, cl       : 'lisp'
, el       : 'lisp'
, vue      : 'vue'
, yml      : 'yaml'
, yaml     : 'yaml'
, xml      : 'xml'
, txt      : null
, log      : null
, text     : null
, def      : null
, list     : null
, conf     : null
}

const Viewer = React.createClass({
  swapDoc (path, name) {
    this.setState({
      pad        : path
    , activeFile : name
    , mode       : this.modeFromFilename(name)
    })
  },

  getInitialState(){
    let student  = !!(this.props.role === 'r')
    let cmConfig = {
      autoCloseBrackets  : true
    , autoCloseTags      : true
    , autofocus          : true
    , cursorScrollMargin : 2
    , lineNumbers        : true
    , lineWrapping       : true
    , matchBrackets      : true
    , mode               : 'javascript'
    , tabSize            : 2
    , theme              : 'abcdef'
    , undoDepth          : 1000
    , readOnly           : student
//    , extraKeys: {
//        'Cmd-S'  : function(instance){handleSave()}
//      , 'Ctrl-S' : function(instance){handleSave()}
//      , 'Cmd-O'  : function(instance){handleOpen()}
//      , 'Ctrl-O' : function(instance){handleOpen()}
// these will need to be hooked up with fire(pad|base) at some point.
//      , 'Cmd-N'  : function(instance){handleNew()}
//      , 'Ctrl-N' : function(instance){handleNew()}
//      }
    }
    return {
      pad        : `${this.props.projectKey}/default`
    , activeFile : ''
    , cmConfig   : cmConfig
    , isSetting  : false
    , isEditing  : false
    , mode       : ''
    , themes     : themeNames
    }
  },

  modeFromFilename(fileName){
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
