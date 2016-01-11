import React from 'react'
import Viewer from './Viewer'
import StatusBar from './statusbar/Statusbar'
import TitleBar from './titlebar/Titlebar'
import Tree from './tree/Tree'
import InlineCss from 'react-inline-css'

const MirrorWrapper = React.createClass({
  render () {
    return (
      <InlineCss stylesheet={`
        & .container {
               border-radius:3px;
               margin: 5px 0 0 10px;
               padding:10px;
               width:96%;
               position: relative;
               left:0;
               top: 5px;
               height:595px;
              //  border:1px solid white;
               box-shadow: 1px 1px 1px 1px gray;
               background-color:white;
            }
               `}>
               <div className="container">
                      <TitleBar />
                      <Tree />
                            <Viewer className="Viewer" />
                    <StatusBar />
                </div>
       </InlineCss>
    )
  }
})

export default MirrorWrapper
