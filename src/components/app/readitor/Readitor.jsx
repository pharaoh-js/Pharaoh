import React     from 'react'
import InlineCss from "react-inline-css"
import Wrapper   from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar  from './titlebar/Titlebar'
import Tree      from './tree/Tree'
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

const Viewer = React.createClass({

  swapDoc (pad) {
    this.setState({pad:pad})
  },
  getInitialState () {
    return {
        pad: 'test3'
      , isSetting: false
      , cmConfig : cmConfig
    }
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
    let config = this.state.cmConfig
    config.theme = val;
    this.setState({ cmConfig:config })
  },
  render () {
    return (
      <InlineCss componentName="Readitor" stylesheet={stylesheet}>
        <div className="container">
          <TitleBar
            swap={ this.swapDoc }
            pad={ this.state.pad }
            showSettings={this.showSettings}
            hideSettings={this.hideSettings}
            isSetting ={this.state.isSetting}
             />
          <Tree />
          <Wrapper
            isSetting={this.state.isSetting}
            pad={this.state.pad}
            config={this.state.cmConfig}
            updateSettings={this.updateSettings}
            className="Viewer"
            />
          <StatusBar />
        </div>
      </InlineCss>
      )
    }
  })

export default Viewer
