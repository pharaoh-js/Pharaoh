import React     from 'react'
import InlineCss from "react-inline-css"
import Wrapper   from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar  from './titlebar/Titlebar'
import Tree      from './tree/FileTree.jsx'

const stylesheet = require('!css!less!./readitor.less').toString()

const BASEREF = 'https://pharaohjs.firebaseio.com/session/'

const cmConfig = {
    lineWrapping      : true
  , mode              : 'javascript'
  , theme             : 'default'
  , lineNumbers       : true
  , matchBrackets     : true
  , lineWrapping      : true
  // , keyMap            : 'sublime'
  , autoCloseBrackets : true
  , autoCloseTags     : true
  }

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
    html   : 'htmlmixed'
  , js     : 'javascript'
  , css    : 'css'
  , jsx    : 'jsx'
  , scss   : 'sass'
  , py     : 'python'
  , clj    : 'clojure'
  , coffee : 'coffeescript'
  , md     : 'gfm'
  , php    : 'php'
  , rb     : 'ruby'
  , swift  : 'swift'
  }

const Viewer = React.createClass({
  swapDoc (path, name) {
    this.setState({
      pad: path,
      activeFile: name,
      mode: this.modeFromFilename(name)
    })
  },
  getInitialState () {
    let student = !!(this.props.role === 'r')
    let cmConfig = {
        lineWrapping      : true
      , mode              : 'javascript'
      , theme             : 'default'
      , lineNumbers       : true
      , matchBrackets     : true
      , lineWrapping      : true
      , readOnly          : student
      , autoCloseBrackets : true
      , autoCloseTags     : true
      }
    return {
        pad: `${this.props.projectKey}/default`
      , isSetting: false
      , cmConfig: cmConfig
      , activeFile: ''
      , themes: themeNames
      , mode: ''
      , isEditing: false
    }
  },
  modeFromFilename(fileName) {
   let arr = fileName.split('.')
   let ext = arr[arr.length-1]
   return modeObj[ext]
 },
 setMode(fileName) {
   let mode = this.modeFromFilename(fileName)
   this.updateSettings('mode', mode)
 },
  showSettings () {
    this.setState({ isSetting: true })
  },
  hideSettings () {
    this.setState({isSetting: false})
  },
  showEdit () {
    this.setState({ isEditing: true })
  },
  hideEdit () {
    this.setState({ isEditing: false })
  },
  updateSettings (prop, val) {
    let config = Object.assign({},this.state.cmConfig)
    config[prop] = val
    this.setState({ cmConfig:config })
    console.log(prop,val)
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

