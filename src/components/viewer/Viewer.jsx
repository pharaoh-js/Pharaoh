import React from 'react'
import MirrorWrapper from './mirror/MirrorWrapper'
import StatusBar from './statusbar/Statusbar'
import TitleBar from './titlebar/Titlebar'
import Tree from './tree/Tree'

const Viewer = React.createClass({
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
          height:'610px',
          boxShadow: '1px 1px 1px 1px gray',
          backgroundColor:'white',
        }
      }
  return (
        <div style={style.container}>
          <TitleBar/>
          <Tree/>
          <MirrorWrapper className="Viewer"/>
          <StatusBar/>
        </div>
        )
      }
  })

export default Viewer
