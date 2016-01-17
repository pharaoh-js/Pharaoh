import React     from 'react'
import InlineCss from "react-inline-css"
import Wrapper   from './wrapper/Wrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar  from './titlebar/Titlebar'
import Tree      from './tree/Tree'
const stylesheet = require('!css!less!./readitor.less').toString()

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
  toggleSettings () {
    this.setState({ isSetting: !this.state.isSetting })
  },
  handleSettingsClick () {
    this.toggleSettings();
  },
  render () {
    return (
          <InlineCss componentName="Readitor" stylesheet={stylesheet}>
            <div className="container">
              <TitleBar
                swap={ this.swapDoc }
                pad={this.state.pad}
                handleClick={this.handleSettingsClick}
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
          </InlineCss>
        )
    }
  })

export default Viewer

