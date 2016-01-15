import React from 'react'
import Wrapper from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar from './titlebar/Titlebar'
import Tree from './tree/Tree'

const Viewer = React.createClass({

  swapDoc (pad) {
    this.setState({pad:pad})
  },
  getInitialState () {
    return {
      pad: 'test3',
      isSetting: false
    }
  },
  showSettings () {
    this.setState({ isSetting: true });
    console.log(this.state.isSetting);
    document.addEventListener("click", this.hideSettings.bind(this));
  },
  hideSettings () {
    document.removeEventListener("click", this.hideSettings.bind(this));
    this.setState({isSetting: false});
    console.log(this.state.isSetting);
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
            className="Viewer"
            />
          <StatusBar />
        </div>
        )
      }
  })

export default Viewer
