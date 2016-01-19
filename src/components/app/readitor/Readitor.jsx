import React     from 'react'
import InlineCss from "react-inline-css"
import Wrapper   from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar from './titlebar/Titlebar'
import Tree from './tree/FileTree.jsx'

const stylesheet = require('!css!less!./readitor.less').toString()

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

const themeNames = ['default','monokai','mbo','abcdef','base16-dark','bespin','midnight']
// const modeNames = ['js','html','css','jsx','sass' ]
const modeObj = {
  html: 'htmlembedded',
  js: 'javascript',
  css: 'css',
  jsx: 'jsx',
  sass: 'sass'
}

const Viewer = React.createClass({
  swapDoc (pad) {
    this.setState({
      pad:pad.link,
      activeFile: pad.fileName,
      mode: this.modeFromFilename(pad.fileName)
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
   return modeObj[ext];
 },
  showSettings () {
    this.setState({ isSetting: true });
    // document.addEventListener("click", this.hideSettings);
  },
  hideSettings () {
    // document.removeEventListener("click", this.hideSettings);
    this.setState({isSetting: false});
  },
  updateSettings (prop, val) {
    // let config = this.state.config  // don't do this!
    let config = Object.assign({},this.state.cmConfig)
    config[prop] = val;
    this.setState({ cmConfig:config })
  },
  render () {
    return (
      <InlineCss componentName="Readitor" stylesheet={stylesheet}>
        <div className="container">
          <TitleBar
            swap={ this.swapDoc }
            pad={this.state.activeFile}
            showSettings={this.showSettings}
            isSetting ={this.state.isSetting}
          />
          <Tree swapDoc={this.swapDoc} />
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
