import React from 'react'
import Page from './content/Page'
import StatusBar from './../viewer/statusbar/Statusbar'
// import TitleBar from './../viewer/titlebar/Titlebar'
import Tree from './../viewer/tree/Tree'

const Viewer = React.createClass({
  render () {
    const container = {
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
      overFlow:'auto'
    }
  return (
        <div style={container}>
          <Tree />
          <Page className="Viewer"/>
          <StatusBar/>
        </div>
        )
      }
  })

export default Viewer
