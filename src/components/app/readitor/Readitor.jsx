import React from 'react'
import Wrapper from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar from './titlebar/Titlebar'
import Tree from './tree/FileTree.jsx'

const Viewer = React.createClass({

  swapDoc (pad) {
    this.setState({
      pad:pad.link,
      activeFile: pad.fileName
    })
  },
  getInitialState () {
    return {
      pad: 'default',
      isSetting: false,
      activeFile: ''
    }
  },
  toggleSettings () {
    this.setState({ isSetting: !this.state.isSetting })
  },
  handleSettingsClick () {
    this.toggleSettings();
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
            pad={this.state.activeFile}
            handleClick={this.handleSettingsClick}
            isSetting ={this.state.isSetting}
             />
          <Tree swapDoc={this.swapDoc} />
          <Wrapper
            isSetting={this.state.isSetting}
            pad={this.state.pad}
            className="Viewer"
            />
          <StatusBar />
        </div>
        )
      }
  })

export default Viewer
