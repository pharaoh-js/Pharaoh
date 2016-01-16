import React from 'react'
import Wrapper from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar from './titlebar/Titlebar'
import Tree from './tree/Tree'

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
    document.addEventListener("click", this.hideSettings);
  },
  hideSettings () {
    document.removeEventListener("click", this.hideSettings);
    this.setState({isSetting: false});
  },
  updateSettings (prop, val) {
    console.log('updateSettings: ', prop, val);
    let config = this.state.cmConfig
    config[prop] = val;
    setState({cmConfig:config})
  },
  render () {
      let style = {
        container: {
          borderRadius:'3px',
          margin: '5px 0 0 10px',
          padding:'10px',
          width:'96%',
          position: 'relative',
          left:'0',
          top: '5px',
          height:'620px',
          boxShadow: '1px 1px 1px 1px gray',
          backgroundColor:'white',
        }
      }
  return (
        <div style={style.container}>
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
        )
      }
  })

export default Viewer
