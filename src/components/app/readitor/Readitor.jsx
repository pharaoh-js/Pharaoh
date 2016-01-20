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
  , 'solarized-light'
  , 'solarized-dark'
  , 'tomorrow-night-eighties'
  , 'tomorrow-night-bright'
  , 'zenburn'
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
    return {
        pad: 'default'
      , isSetting: false
      , cmConfig: cmConfig
      , activeFile: ''
      , themes: themeNames
      , mode: ''
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
    // document.addEventListener("click", this.hideSettings);
  },
  hideSettings () {
    this.setState({isSetting: false})
  },
  updateSettings (prop, val) {
    // let config = this.state.config  // don't do this!
    let config = Object.assign({},this.state.cmConfig)
    config[prop] = val
    this.setState({ cmConfig:config })
    console.log(prop,val)
  },
  // componentDidMount () {
  //   console.log('role: ', this.props.role, 'project: ', this.props.project);
  // },
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
